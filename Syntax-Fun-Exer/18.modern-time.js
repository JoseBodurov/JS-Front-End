function modern(text){
     let words = text.split(' ');
     let result = [];
     for (const word of words) {
        if(word.startsWith('#') && word.length > 1 && checkIfWordIsValid(word)){
           result.push(word.slice(1));
        }
     }

     console.log(result.join('\n'));
     function checkIfWordIsValid(myWord){
        let wordLower = myWord.toLowerCase().slice(1);
        let isValid = true;

        for (const symbol of wordLower) {
            let asciiCode = symbol.charCodeAt(0);
            if (!(asciiCode >= 97 && asciiCode <= 122)){
                isValid = false;
                break;
            }
        }
        return isValid;
     }
     let pattern = /[A-za-z]{1,}/
     pattern.test('Kiro');




}