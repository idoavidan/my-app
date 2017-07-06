import React, { Component } from 'react';
import {addComment} from './models/commentsModel';
import {socketClient} from './models/serverConnections';


let styles = {
  comment: {padding: '8px 0', 'borderBottom': '1px solid #e2e2e2'},
  inputBox : {
    out : {'whiteSpace':'nowrap', margin: '10px 0'},
    inputField : { width:'calc(100% - 100px)'},
    inputButton : {width: '100px'}
  },
  comments : {textAlign: 'left', 'minWidth' : '200px'}

}

const Comment = (props, context) => (
  <div style={styles.comment}>
    <span>{props.commentText}</span>
  </div>
);

const InputBox = (props, context) => (
  <div style={styles.inputBox.out}>
  <form onSubmit={props.handleSubmit}>
    <label>
      <input type="text" style={styles.inputBox.inputField} value={props.commentValue} onChange={props.handleChange} />
    </label>
    <input type="submit" style={styles.inputBox.inputButton} value="send"/>
  </form>
  </div>
);

class Comments extends Component{
  constructor(props){
      super(props);
      this.state = {
        comments : props.comments,
        commentValue : "",
        showComments : false,
      };
  }

  handleChange(event) {
    this.setState({commentValue: event.target.value});
  }

  setCommentState(newComment){
    const newComments = [...this.state.comments,newComment];
    this.setState({comments : newComments});
  }

  sendComment(){
    addComment(this.props.picIndex, this.state.commentValue);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setCommentState(this.state.commentValue);
    this.sendComment();
  }

  async updateComment(comment){
    if(comment.index === this.props.picIndex){
      this.setCommentState(comment.comment);
    }
  }

  async componentDidMount() {
    socketClient.addEventListener('message', event => {
      const data = JSON.parse(event.data);
      if(data.type === "COMMENT"){
        this.updateComment(data.comment);
      }
    });
  }

  clickComments(){
    const toggle = !this.state.showComments;
    this.setState({showComments : toggle});
  }

  render(){
    const comments = this.state.comments.map((comment,index) => {
      if (comment) {
        return (<Comment commentText = {comment} key={index} />);
      }
    })

    const inputBox =  (<InputBox handleSubmit={this.handleSubmit.bind(this)}
                      handleChange={this.handleChange.bind(this)}/>);

    if(this.state.showComments) { return (
      <div style={styles.comments}>
          <button onClick={this.clickComments.bind(this)}>comments</button>
          <div>{comments}</div>
          <div>{inputBox}</div>
      </div>)
    }
    return(
      <div style={styles.comments}>
        <button onClick={this.clickComments.bind(this)}>comments</button>
      </div>)}

}
export {Comments as default}
