// import ImgBox from './imgBox';
import React, { Component } from 'react';
import Comments from './Comments';
import Like from './like';

let styles = {
    borderStyle: 'solid',
    borderSpacing: '10px 50px',
    width: "200px",
    margin: 'auto',
    // padding: '10px'
}

const ImgBox = (props,context) => (
  <div style={styles}>
    <span>{props.title}</span>
    <img src={props.url} alt=""/>
    <Like likes={props.likes} addLike={props.addLike}/>
    <Comments comments={props.comments} addComment={props.addComment}/>
  </div>
)

class App extends Component {
  state = {}

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  async mapPicsToComponents(pics){
    return pics.map((key,index) =>
        (<ImgBox url = {key.url} likes = {key.likes}
        comments = {key.comments} title = {key.title}
        key={index} addComment={this.props.addComment} addLike={this.props.addLike}/>));
  }

  async componentDidMount() {
    const pics = await this.props.initPromise();
    this.setStateAsync({pics : await this.mapPicsToComponents(pics.getPics.pics)});
  }

  render() {
    return (
      <div >
        <h3 style={{textAlign: 'center',backgroundColor: 'grey'}}>wow</h3>
        {this.state.pics || 'loading'}
      </div>
    )
  }
}

export default App;
