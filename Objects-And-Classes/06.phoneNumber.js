function phoneNumbers(input){
let phoneBook ={};
for (const line of input) {
    let [name,phoneNumber] = line.split(' ');
    phoneBook[name] = phoneNumber;
    // if(!phoneBook[name].hasOwnProperty(name)){
    //     phoneBook[name] = phoneNumber;

    // }
}
for (const key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
}
}