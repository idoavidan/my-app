import React, { Component } from 'react';

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

  setLike(){
    const newLikeAmount = this.state.likes + 1;
    this.setState({liked: true, likes : newLikeAmount});
    this.props.likeModel.addLike(this.props.picIndex);
  }

  render(){
    const notLiked = (<button onClick={this.setLike.bind(this)}>Likes:{this.props.likes}</button>);
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
