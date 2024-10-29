const namesFunc = require('./names.js');
const hobbiesFunc = require('./hobbies.js');

/* console.log(namesFunc);
console.log(hobbiesFunc); */
    
    const {hobby} = hobbiesFunc
    const {firstName,lastName} = namesFunc
function livingPerson(){
    let livingPerson = {
        firstName: firstName,
        lastName: lastName,
        hobbies:[hobby]
    }
    return livingPerson
}

console.log(livingPerson());
