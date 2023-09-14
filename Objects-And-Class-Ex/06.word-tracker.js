function wordsTracker(input){
    let searchWords = input.shift().split(' ');
    let words = {};
    for (const word of searchWords) {
        let count = input.filter((w)=> w === word).length;
        words[word] = count;
    }
    let sorted =Object.entries(words)
    .sort((a,b)=>{
        let [_nameA,countA] = a;
        let [_nameB,countB] = b;
        return countB - countA;
    })

    for (const [word,count] of sorted) {
        console.log(`${word} - ${count}`);
    }

}