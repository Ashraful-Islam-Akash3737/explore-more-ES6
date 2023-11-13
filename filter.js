const playersHeight = [56, 67, 76, 56, 68, 78, 72, 61, 59];
// const selected = playersHeight.filter(p => p > 60);
const selected = playersHeight.filter(p => p > 70);
console.log(selected);



const playersName = ['akash', "alif", "ahmed", "ahashan"];
const playersAge = [47, 38, 28, 39, 49, 45];

const evenPlayersAge = playersAge.filter( p => p % 2 === 0);
console.log(evenPlayersAge);

const evenPlayersName = playersName.filter( p => p.length > 4);
console.log(evenPlayersName);
