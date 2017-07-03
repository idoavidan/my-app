import React, { Component } from 'react';
import Comments from './Comments';
import Like from './like';

let styles = {
    header : {
      textAlign: 'center',
      backgroundColor: 'grey'},

    outlet : {
      width: "80%",
      margin : "auto",
      position: 'relative'},

    ImgBox : {
      out : {textAlign: 'center', position : "relative"},
      underTitle: { display: 'inline-block' },
      img : {position : "relaive"}
    },
}

const ImgBox = (props,context) => (
  <div style={styles.ImgBox.out}>
    <div>{props.title}</div>
    <div style={styles.ImgBox.underTitle}>
          <img src={props.url} alt="LOADING" style={styles.ImgBox.img}/>
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
    // const addLike = () => console.log(x);
    this.props.socket.addEventListener('message', event => {
      const data = JSON.parse(event.data);
      // console.log(data);
      if(data.type === "LIKE"){
        console.log(data)
        const newState = this.state.pics[data.like.index].props.likes + 100;
        console.log(newState)
        // this.setStateAsync({state.pics[data.like.index].props.likes : newState})
      }
    });

  }



  render() {
    return (
      <div >
        <h3 style={styles.header}>wow</h3>
        <AddImg/>
        <div style={styles.outlet}>
        {this.state.pics || 'loading'}
        </div>
      </div>
    )
  }
}

export default App;
