import React, { Component } from 'react';
import Comment from './Comment';
import InputBox from './InputBox';

class imgBox extends Component{
    constructor(props){
        super();
        this.state = {
          liked : false,
          comments : props.comments,
          commentValue : '',
          showComments : false
        }
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

    setLike(){
      this.setState({liked: true});
    }

    ifLiked(jsxFalse,jsxTrue){
      if(!this.state.liked){
        return jsxFalse;
      }
      else{
        return jsxTrue;
      }
    }

    render(){
      let styles = {
        imgBox : {
          borderStyle: 'solid',
          borderCollapse: 'separate',
          borderSpacing: '10px 50px',
          // textAlign: 'center',
          width: "200px",
          margin: 'auto',
          padding: '10px'
         }
      }

      const comments = this.state.comments.map((comment,index) =>
      (this.ifShow(<Comment name = {comment} index={index} />)));

      const inputBox =
      this.ifShow(<InputBox handleSubmit={this.handleSubmit.bind(this)}
                    handleChange={this.handleChange.bind(this)}/>);
      const like =
      this.ifLiked(<button onClick={this.setLike.bind(this)}>Likes:{this.props.likes}</button>,
                   <span >Likes:{this.props.likes + 1}</span>)
      return(
        <div style={styles.imgBox}>
          <span>{this.props.title}</span>
          <img src={this.props.url} alt=""/>
          <button onClick={this.clickComments.bind(this)}>comments</button>
          <span style={{float: 'right'}}>{like}</span>
          {comments}
          {inputBox}
        </div>
      );
    }
}
export {imgBox as default}
