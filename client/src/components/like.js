import React, { Component } from 'react';
import {addLike} from './models/likesModel';
import {socketClient} from './models/serverConnections';

let styles = {
  float : 'right'
}

class Like extends Component{
  constructor(props){
    super(props);
    this.state = {
      liked : false,
      likes : props.likes,
    }
  }

  sendLike(){
    addLike(this.props.picIndex);
  }

  setStateLike(){
    const newLikeAmount = this.state.likes + 1;
    this.setState({likes : newLikeAmount});
  }

  setStateButton(){
    this.setState({liked: true});
  }

  setLike(){
    this.sendLike();
    this.setStateLike();
    this.setStateButton();
  }

  async componentDidMount() {
    socketClient.addEventListener('message', event => {
      const data = JSON.parse(event.data);
      if(data.type === "LIKE" && data.like.index === this.props.picIndex){
        this.setStateLike();
      }
    });
  }

  render(){
    const notLiked = (<button onClick={this.setLike.bind(this)}>Likes:{this.state.likes}</button>);
    const liked = (<span >Likes:{this.state.likes}</span>);

    if(this.state.liked){
      return(
        <div>
          <span style={styles}>{liked}</span>
        </div>);
    }
    return(
        <div>
          <span style={styles}>{notLiked}</span>
        </div>);
  }
}

export {Like as default}
/*  <button onClick={hideComent}>hide</button>*/
