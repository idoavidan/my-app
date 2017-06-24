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

const imgBox = (props,context) => (
  <div style={styles}>
    <span>{props.title}</span>
    <img src={props.url} alt=""/>
    <Like likes={props.likes}/>
    <Comments comments={props.comments}/>
  </div>
)


export {imgBox as default}
