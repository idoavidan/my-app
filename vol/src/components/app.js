import React, { Component } from 'react';
import Comments from './Comments';
import Like from './like';
import AddPicComponent from './addPicComponent';

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
    <div>{props.each.title}</div>
    <div style={styles.ImgBox.underTitle}>
          <img src={props.each.url} alt="LOADING" style={styles.ImgBox.img}/>
          <Like likes={props.each.likes} likeModel={props.likeModel} picIndex={props.picIndex}/>
          <Comments comments={props.each.comments}
                    commentModel={props.commentModel}
                      picIndex={props.picIndex} />
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
    return pics.map((each,index) =>
        (<ImgBox each={each}
       key={index} picIndex={index} commentModel={this.props.commentModel}
       likeModel={this.props.likeModel}/>));
  }

  async componentDidMount() {
    const pics = await this.props.initPromise();
    this.setStateAsync({pics : await this.mapPicsToComponents(pics.getPics.pics)});
  }

  render() {
    return (
      <div >
        <h3 style={styles.header}>wow</h3>
        <AddPicComponent picModel={this.props.picModel}/>
        <div style={styles.outlet}>
        {this.state.pics || 'loading'}
        </div>
      </div>
    )
  }
}

export default App;
