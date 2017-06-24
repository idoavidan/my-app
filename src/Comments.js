import React, { Component } from 'react';

const Comment = (props, context) => (
  <div>
    <span style={{}}>{props.commentValue}</span>
  </div>
);

const InputBox = (props, context) => (
  <div>
  <form onSubmit={props.handleSubmit}>
    <label>
      <input type="text" value={props.commentValue} onChange={props.handleChange} />
    </label>
    <input type="submit" value="s" />
  </form>
  </div>
);

class Comments extends Component{
  constructor(props){
      super();
      this.state = {
        comments : props.comments,
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

  ifShow(jsx){
    if(this.state.showComments){
      return(jsx);
    }
    else return(<div/>);
  }
  render(){
    // const ififShow = (jsx)
    const comments = this.ifShow(this.state.comments.map((comment,index) =>
    (<Comment commentValue = {comment} index={index} />)));

    const inputBox =
    this.ifShow(<InputBox handleSubmit={this.handleSubmit.bind(this)}
                  handleChange={this.handleChange.bind(this)}/>);

    // const show = (this.state.comments.map((comment,index) =>
    // <Comment commentValue = {comment} index={index} />);
    // <InputBox handleSubmit={this.handleSubmit.bind(this)}
              // handleChange={this.handleChange.bind(this)}/>);

    return(
      <div>
          <button onClick={this.clickComments.bind(this)}>comments</button>
          {comments}
          {inputBox}
      </div>
    );
  }
}
export {Comments as default}
