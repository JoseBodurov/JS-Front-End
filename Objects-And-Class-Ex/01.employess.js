function employees(input){
let data = {};
for (const name of input) {
     data[name] = Number(name.length);
}
for (const name in data) {
    console.log(`Name: ${name} -- Personal Number: ${data[name]}`);
}
}
