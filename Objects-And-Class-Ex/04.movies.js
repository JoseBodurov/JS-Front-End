function movies(input){
    let films = [];

    for (const line of input) {
        let commandTokens = line.split(' ');
        if(line.includes('add Movie')){
            let movieName = commandTokens.slice(1).join(' ');
            addMovie(movieName);
        }else if(line.includes('directedBy')){
            let indexOfCommand = commandTokens.indexOf('directedBy');
            let movieName = commandTokens.slice(0,indexOfCommand).join(' ');
            let director = commandTokens.slice(indexOfCommand + 1).join(' ');
            directedBy(movieName,director);
        }else{
            let indexOfCommand = commandTokens.indexOf('onDate');
            let movieName = commandTokens.slice(0,indexOfCommand).join(' ');
            let date = commandTokens.slice(indexOfCommand + 1).join(' ');
            addDate(movieName,date);

        }
    }

    let filtered = films.filter((f)=>f.hasOwnProperty('name')&&f.hasOwnProperty('date')&&f.hasOwnProperty('director'))
    for (const film of films) {
        console.log(JSON.stringify(film));
    }

    function addMovie(name){
        films.push({name});
    }
    function directedBy(name,director){
        let movie = films.find((m)=> m.name === name);
        if(movie){
            movie.director = director;
        }
    }
    
    function addDate(name,date){
        let movie = films.find((m)=> m.name === name);
        if(movie){
            movie.date = date;
        }
    }

    // for (const line of input) {
    //     let [name,directed,onDate]= line.split(' ');
    //     switch(name){
    //         case'addMovie':
    //         films[name] = name;
    //         break;
    //     }
    //     switch(directed){
    //         case 'directedBy':
    //             if(films.hasOwnProperty(name)){
    //                 films[directed] = onDate;
    //             }
    //             break;
    //         case 'onDate':
    //             if(films.hasOwnProperty(name)){
    //                 films[onDate] = onDate;
    //             }    
    //             break;
    //     }
    // }
}