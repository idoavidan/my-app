import React, { Component } from 'react';

const Comment = (props, context) => (
  <div>
    <span style={{}}>{props.commentText}</span>
  </div>
);

const InputBox = (props, context) => (
  <div>
  <form onSubmit={props.handleSubmit}>
    <label>
      <input type="text" value={props.commentValue} onChange={props.handleChange} />
    </label>
    <input type="submit" value="s" hide />
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

  handleSubmit(event) {
    event.preventDefault();
    const newComments = [...this.state.comments,this.state.commentValue];
    this.setState({comments : newComments});
  }

  clickComments(){
    const toggle = !this.state.showComments;
    this.setState({showComments : toggle});
  }

  render(){
    const comments = this.state.comments.map((comment,index) =>
    (<Comment commentText = {comment} index={index} />));

    const inputBox =  (<InputBox handleSubmit={this.handleSubmit.bind(this)}
                      handleChange={this.handleChange.bind(this)}/>);
    if(this.state.showComments) { return (
      <div>
          <button onClick={this.clickComments.bind(this)}>comments</button>
          {comments}
          {inputBox}
      </div>)
    }
    else {return(
      <div>
        <button onClick={this.clickComments.bind(this)}>comments</button>
      </div>)}
  }
}
export {Comments as default}
