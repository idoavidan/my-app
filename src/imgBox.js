import React, { Component } from 'react';
import Comments from './Comments';

class imgBox extends Component{
    constructor(props){
        super();
        this.state = {
          liked : false,
        }
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
          borderStyle: 'solid',
          borderSpacing: '10px 50px',
          width: "200px",
          margin: 'auto',
          // padding: '10px'
      }

      const like =
      this.ifLiked(<button onClick={this.setLike.bind(this)}>Likes:{this.props.likes}</button>,
                   <span >Likes:{this.props.likes + 1}</span>)
      return(
        <div style={styles}>
          <span>{this.props.title}</span>
          <img src={this.props.url} alt=""/>
          <span style={{float: 'right'}}>{like}</span>
          <Comments comments={this.props.comments}/>
        </div>
      );
    }
}

export {imgBox as default}
