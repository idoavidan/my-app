import React, { Component } from 'react';
import {addPic} from './models/addPicModel';

let styles = {
  margin : 'auto',
  textAlign: 'center',

}

const InputBox = (props, context) => (
  <div>
  <form onSubmit={props.handleSubmit}>
    <label>
      <span>{props.label}</span>
      <input type="text" value={props.inputUrlValue} onChange={props.handleChange} />
    </label>
  </form>
  </div>
);

class addPicComponent extends Component{
  constructor(props){
    super(props);
    this.state = {};
    // this.state = {url : "", title : ""}
  }


  async componentDidMount() {
    // this.props.likeModel.socket.addEventListener('message', event => {
    //   // const data = JSON.parse(event.data);
    //   // if(data.type === "LIKE" && data.like.index === this.props.picIndex){
    //   //   this.setStateLike();
    //   // }
    //   console.log(event.data);
    // });
  }

  handleUrlChange(event){
    this.setState({inputUrlValue: event.target.value});
  }

  handleTitleChange(event){
    this.setState({inputTitleValue: event.target.value});
  }

  handleSubmitButton(event){
    event.preventDefault();
    addPic(this.state.inputUrlValue, this.state.inputTitleValue);
    this.props.updatePics();
    // console.log(this.state.inputUrlValue,this.state.inputTitleValue);
  }

  render(){
    const inputUrl =  (<InputBox handleChange={this.handleUrlChange.bind(this)} label={"url"}/>);

    const inputTitle = (<InputBox handleChange={this.handleTitleChange.bind(this)} label={"title"}/>);
 /* <img src={this.state.inputUrlValue} alt="LOADING"/>*/
    return(
      <div style={styles}>
        <span>add pics here</span>
        {inputUrl}
        {inputTitle}
        <button onClick={this.handleSubmitButton.bind(this)}>send</button>
      </div>);
  }
}

export {addPicComponent as default}
/*  <button onClick={hideComent}>hide</button>*/
