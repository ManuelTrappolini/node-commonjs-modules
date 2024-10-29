function names(firstName,lastName){
    let person = {
    firstName : firstName,
    lastName : lastName,
    }
    return person
}

let namesFunc = names('Manuel','Trappolini');
module.exports = namesFunc