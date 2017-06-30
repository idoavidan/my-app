import React, { Component } from 'react';
import Comments from './Comments';
import Like from './like';

let styles = {
    // borderStyle: 'solid',
    // borderSpacing: '10px 50px',
    width: "80%",
    margin: "auto",
    position: 'relative',
    // textAlign: "center",
    // padding: '10px'
}


const ImgBox = (props,context) => (
  <div style={{textAlign: 'center', position : "relative"}}>
    <div>{props.title}</div>
    <div style={{ display: 'inline-block' }}>
          <img src={props.url} alt="LOADING" style={{position : "relaive"}}/>
          <Like likes={props.likes} addLike={props.addLike} picIndex={props.picIndex}/>
          <Comments comments={props.comments} addComment={props.addComment} picIndex={props.picIndex}/>
    </div>
  </div>
)

const AddImg = (props,context) => (
  <div>
    <span></span>
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
        key={index} picIndex={index} addComment={this.props.addComment} addLike={this.props.addLike}/>));
  }

  async componentDidMount() {
    const pics = await this.props.initPromise();
    this.setStateAsync({pics : await this.mapPicsToComponents(pics.getPics.pics)});
  }

  render() {
    return (
      <div >
        <h3 style={{textAlign: 'center',backgroundColor: 'grey'}}>wow</h3>
        <AddImg/>
        <div style={styles}>
        {this.state.pics || 'loading'}
        </div>
      </div>
    )
  }
}

export default App;
