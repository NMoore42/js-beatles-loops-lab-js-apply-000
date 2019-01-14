// add solution here
let beatlesMembers = [];

function theBeatlesPlay(musicians, instruments){
  for (let i=0; i<musicians.length; i++){
    beatlesMembers[i] = musicians[i] + " plays " + instruments[i];
  }
  return beatlesMembers;
}