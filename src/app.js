import Pic from './Pic';
import React, { Component } from 'react';

var styles = {
  navBar: {
    backgroundColor: 'grey',
    color: 'black',
    textAlign: 'center',
    WebkitTransition: 'all',
    msTransition: 'all',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {pics: [
                          {url :'https://unsplash.it/200/200/?random',
                           likes :11,
                           comments : ["hahaha met"], title : "Banana"},
                          {url :'https://unsplash.it/200/200/?random',
                           likes :2,
                           comments : [], title : "Falafel"},
                          {url :'https://unsplash.it/200/200/?random',
                           likes :3,
                           comments : [], title : "Pizza"},
                          {url :'https://unsplash.it/200/200/?random',
                           likes :2,
                           comments : [], title : "House"},
                          {url :'https://unsplash.it/200/200/?random',
                            likes :2123,
                          comments : [], title : "Food"}
                         ]}
  }
  render() {

    const pics = this.state.pics.map((key,index) =>
    (<Pic url = {key.url} likes = {key.likes} comments = {key.comments} title = {key.title} index={index}/>));

    return (
      <div >
        <h3 style={styles.navBar}>wow</h3>
        {pics}
      </div>
    );
  }
}
/*
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          <input type="text" value={inputValue} onChange={this.handleChange.bind(this)} />
        </label>
        <input type="submit" value="Sbmt"/>
      </form>
*/
// <Title name = {"wow what an app"}/>
/*<Comment name = {this.state.comment}/>*/


export default App;
