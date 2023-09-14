let person = {name:'Krasi',age:23,height :'168cm',cooking: function(){
    return `${this.name} is cooking`;
}}

const keys = Object.keys(person);
for (const key of keys) {
    console.log(`Key ${key}`);
    console.log(`Value ${person[key]}`);
}
const values = Object.values(person);
for (const value of values) {
    console.log(`Value ${value}`);
}
const tuples = Object.entries(person);
for (const [key,value] of tuples) {
    console.log(`Key ${key}`);
    console.log(`Value ${value}`);
}