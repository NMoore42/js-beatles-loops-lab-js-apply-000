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
  while (i < facts.length) {
    facts[i]+= "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  let iLoveArray = [];
  do {
    iLoveArray.pop("I love the Beatles!") ;
  } while (iLoveArray.length <= number)
}