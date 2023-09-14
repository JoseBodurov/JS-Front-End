function addressBook(input){
    let data = {};
    for (const line of input) {
        let[name,address] = line.split(':');
        // if(!data.hasOwnProperty(name)){
        //     data[name] = address;
        // }else{
        // }
        data[name] = address;
    }
    let output = Object.keys(data)
    .sort((nameA,nameB) => nameA.localeCompare(nameB));
    for (const name of output) {
        console.log(`${name} -> ${data[name]}`);
    }
}