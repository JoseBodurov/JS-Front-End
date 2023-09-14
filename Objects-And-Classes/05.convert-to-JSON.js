function convertToJSON(name,lastName,hairColor){
    const person = {
        name,
        lastName,
        hairColor
    }
    let data = JSON.stringify(person);
    console.log(data);
}