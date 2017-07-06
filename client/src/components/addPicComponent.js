import React, { Component } from 'react';

let styles = {
  margin : 'auto'
}

const InputBox = (props, context) => (
  <div>
  <form onSubmit={props.handleSubmit}>
    <label>
      <input type="text" value={props.inputUrlValue} onChange={props.handleChange} />
    </label>
    <input type="submit" value="send"/>
  </form>
  </div>
);

class addPicComponent extends Component{
  constructor(props){
    super(props);
    this.state = {url : "", title : ""}
  }


  async componentDidMount() {
    // this.props.likeModel.socket.addEventListener('message', event => {
    //   const data = JSON.parse(event.data);
    //   if(data.type === "LIKE" && data.like.index === this.props.picIndex){
    //     this.setStateLike();
    //   }
    // });
  }

  handleUrlChange(event){
    this.setState({inputUrlValue: event.target.value});
  }

  handleUrlSubmit(event){
    event.preventDefault();
    this.setState({url : this.state.inputUrlValue});
    console.log(this.state.inputUrlValue);

  }

  handleTitleChange(event){
    this.setState({inputTitleValue: event.target.value});
  }

  handleTitleSubmit(event){
    event.preventDefault();
    this.setState({title : this.state.inputTitleValue});
    console.log(this.state.inputTitleValue);

  }

  render(){
    const inputUrl =  (<InputBox handleSubmit={this.handleUrlSubmit.bind(this)}
                                 handleChange={this.handleUrlChange.bind(this)}/>);

    const inputTitle = (<InputBox handleSubmit={this.handleTitleSubmit.bind(this)}
                                 handleChange={this.handleTitleChange.bind(this)}/>);

    return(
      <div style={styles}>
        <span>IWantToBeComponent{this.state.inputUrlValue}</span>
        {inputUrl}
        {inputTitle}
        <span>IamComponent</span>
      </div>);
  }
}

export {addPicComponent as default}
/*  <button onClick={hideComent}>hide</button>*/
