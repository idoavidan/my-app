import React, { Component } from 'react';

class Like extends Component{
  constructor(props){
      super();
      this.state = {
        liked : false,
      }
  }

  setLike(){
    this.setState({liked: true});
  }

  render(){
    const notLiked = (<button onClick={this.setLike.bind(this)}>Likes:{this.props.likes}</button>);
    const liked = (<span >Likes:{this.props.likes + 1}</span>);
    if(this.state.liked){
      return(
        <div>
          <span style={{float: 'right'}}>{liked}</span>
        </div>);
    }
    else{
      return(
        <div>
          <span style={{float: 'right'}}>{notLiked}</span>
        </div>);
    }
  }
}
export {Like as default}
/*  <button onClick={hideComent}>hide</button>*/
