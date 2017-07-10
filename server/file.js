var JsonDB = require('node-json-db');


var db = new JsonDB("myDB", true, false);

// The root provides a resolver function for each API endpoint
// const addLike = async function ({picIndex}) {
//   // ws.emit("message",psicIndex);
//   // console.log(picIndex);
//   const oldLikesAmount = db.getData("/testDB/pics[" +picIndex +"]/likes");
//   db.push("/testDB/pics[" +picIndex +"]/likes", oldLikesAmount + 1);
//   return oldLikesAmount;
// };
//
// const addComment = async function({picIndex, commentString}){
//   db.push("/testDB/pics[" + picIndex +"]/comments[]", commentString, true);
//   return picIndex;
// };
//
// const addPic = async function({url, title}){
//   let newPic = {url: url, title : title, comments : [], likes : 0}
//   // console.log(newPic);
//   db.push("/testDB/pics[]", newPic);
//   return 1;
// };
//
// const getLastPicPost = async () => {
//   return db.getData("/testDB/pics")[0];
// };

const getPics = async () => {
  console.log("wow");
  // const pics = db.getData("/testDB")
  // const rPics = pics.reverse();
  // console.log(pics.pics.reverse());
  // const rpics = {pics : pics.pics.reverse()};
  // return pics;
};

export const myEmitter = new MyEmitter();

myEmitter.on('getPics', getPics);
// myEmitter.emit('event', 'a', 'b');
