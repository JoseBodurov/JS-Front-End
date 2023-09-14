function meeting(input){
    let data = {};
    for (const line of input) {
        let [day,name] = line.split(' ');
        if(!data.hasOwnProperty(day)){
            console.log(`Scheduled for ${day}`);
            data[day] = name;
        }else{
            console.log(`Conflict on ${day}!`);
        }
    }
    for (const key in data) {
        console.log(`${key} -> ${data[key]}`);
    }
}