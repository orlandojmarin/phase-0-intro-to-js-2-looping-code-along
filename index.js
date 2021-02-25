// Code your solutions in this file
/*for (let age = 30; age , 40; age++) {
    console.log("I'm ${age] years old. Happy birthday to me!")
}*/




function writeCards(stringName, eventName) {
  const fullPhrase = [];
  for (let i = 0; i < stringName.length; i++) {
    fullPhrase.push(`Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`);
  }
  return fullPhrase;
}


function countDown(){
    let countDown = 10
    while (countDown >= 0) {
       console.log (countDown--);
    }
}