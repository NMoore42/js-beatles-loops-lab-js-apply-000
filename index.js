// add solution here
let beatlesMembers = [];

function theBeatlesPlay(musicians, instruments){
  for (let i=0; i<musicians.length; i++){
    beatlesMembers[i] = musicians[i] + " plays " + instruments[i];
  }
  return beatlesMembers;
}

function johnLennonFacts(facts){
  let i = 0;
  while (facts[i].endsWith("!!!") !==true) {
    facts[i]+= "!!!";
    i++;
  }
}