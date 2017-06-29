var JsonDB = require('node-json-db');

import {buildSchema} from 'graphql';

//schema
export const schema = buildSchema(`
  type PicPost {
    url: String
    likes: Int
    comments : [String]
    title : String
  }
  type pics {
    pics : [PicPost]
  }
  type Query {
    getLastPicPost: PicPost
    getPics: pics
  }
  type Mutation {
      addLike(picIndex : Int) : Int
      addComment(picIndex : Int, commentString : String!) : Int
  }
`);

// "db" connection
var db = new JsonDB("myDB", true, false);

// The root provides a resolver function for each API endpoint
export const root = {
  addLike: function ({picIndex}) {
    const oldLikesAmount = db.getData("/testDB/pics[" +picIndex +"]/likes");
    db.push("/testDB/pics[" +picIndex +"]/likes", oldLikesAmount + 1);
    return oldLikesAmount;
  },
  addComment: function({picIndex, commentString}){
    db.push("/testDB/pics[" + picIndex +"]/comments[]", commentString, true);
    return picIndex;
  },
  getLastPicPost: () => {
    return db.getData("/testDB/pics")[0];
  },
  getPics: () => {
    return db.getData("/testDB");
  }
};
