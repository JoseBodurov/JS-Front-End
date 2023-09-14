const person = { 
    firstName : 'Peter',
    lastName: 'Johnson',
    fullName(){
        console.log(this);
        return this.firstName + ' ' + this.lastName;
    }
}
let jsonString = JSON.stringify(person);
let personObjAgain = JSON.parse(jsonString);
console.log(jsonString);