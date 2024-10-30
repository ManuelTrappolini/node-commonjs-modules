const names = require('./names.js');
const hobbies = require('./hobbies.js');

/* console.log(namesFunc);
console.log(hobbiesFunc); */
    
 /*    const {hobby} = hobbies
    const {firstName,lastName} = names */

function userAccount(){
    const user = names('Manuel', 'Trappolini')
    const userHobbies = hobbies('Sport','VideoGames','Cinema')
    const userAccount = {...user, ...userHobbies}
    return userAccount
}

console.log(userAccount());
