function stringSub(word,text){
    let wordLower = word.toLowerCase();
    let textLower = text.toLowerCase();

    if(textLower.includes(wordLower)){
        return word;
    }
    return `${word} not found!`
}

//10 zadacha every method