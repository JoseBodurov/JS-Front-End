function solve (input){
    let songs = [];
    class Song{
        constructor(type,name,time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let numbersOfSongs = input.shift();
    let typeList = input.pop();
    for (let i = 0;i < numbersOfSongs; i++) {
        let[type,name,time] = input[i].split('_');
        let songgg = new Song(type,name,time);
        songs.push(songgg);
    }
    // for (const songgg of songs) {
    //     if(songgg.type === typeList){
    //         console.log(songgg.name);
    //     } else if(typeList === all){
    //         console.log(songgg.name);
    //     }
    // }
    if(typeList === 'all'){
        songs.forEach((a)=>console.log(a.name));
    }else{
        let filtered = songs.filter((a)=>a.type === typeList);
        filtered.forEach((a)=> console.log(a.name));
    }

}