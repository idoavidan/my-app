import React, { Component } from 'react';

const Comment = (props, context) => (
  <div style={{padding: '8px 0', 'border-bottom': '1px solid #e2e2e2'}}>
    <span style={{}}>{props.commentText}</span>
  </div>
);

const InputBox = (props, context) => (
  <div style={{'white-space':'nowrap', margin: '10px 0'}}>
  <form onSubmit={props.handleSubmit}>
    <label>
      <input type="text" style={{ width:'calc(100% - 100px)'}} value={props.commentValue} onChange={props.handleChange} />
    </label>
    <input type="submit" style={{width: '100px'}} value="s"/>
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
    this.props.addComment(this.props.picIndex, this.state.commentValue);
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
      <div style={{textAlign: 'left', 'min-width' : '435px'}}>

          <button onClick={this.clickComments.bind(this)}>comments</button>
          <div>{comments}</div>
          <div>{inputBox}</div>
      </div>)
    }
    return(
      <div style={{textAlign: 'left', 'min-width' : '435px'}}>
        <button onClick={this.clickComments.bind(this)}>comments</button>
      </div>)}

}
export {Comments as default}
