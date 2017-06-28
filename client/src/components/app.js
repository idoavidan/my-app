import ImgBox from './imgBox';
import React from 'react';


const init = {pics: [
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
                       comments : [],
                       title : "House"},
                      {url :'https://unsplash.it/200/200/?random',
                        likes :2123,
                      comments : [], title : "Food"}
                     ]}

const imgBoxes = init.pics.map((key,index) =>
(<ImgBox url = {key.url} likes = {key.likes} comments = {key.comments} title = {key.title} key={index}/>));

const App = (props, context) => (
  <div >
    <h3 style={{textAlign: 'center',backgroundColor: 'grey'}}>{"props.fuck().then({return})"}</h3>
    {imgBoxes}
  </div>
);

export default App;
