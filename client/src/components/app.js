import ImgBox from './imgBox';
import React from 'react';

const func = function(initValue){
  return initValue.map((key,index) =>
      (<ImgBox url = {key.url} likes = {key.likes} comments = {key.comments} title = {key.title} key={index}/>));
}
const App = (props, context) => (
  <div >
    <h3 style={{textAlign: 'center',backgroundColor: 'grey'}}>{"props.fuck().then({return})"}</h3>
    {func(props.initValue)}
  </div>
);

export default App;
