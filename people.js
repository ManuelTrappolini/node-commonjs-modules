const namesFunc = require('./names.js');
const hobbiesFunc = require('./hobbies.js');

/* console.log(namesFunc);
console.log(hobbiesFunc); */
const {firstName,lastName} = namesFunc
const {hobbies} = hobbiesFunc
function livingPerson(){
    let livingPerson = {
        firstName,
        lastName,
        hobbies,
    }
    return livingPerson
}

console.log(livingPerson());
