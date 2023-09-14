function rangeCharacters(first,second){
    let asciiCharF = first.charCodeAt(0);
    let asciiCharS = second.charCodeAt(0);
    let min = Math.min(asciiCharF,asciiCharS) ;
    let max = Math.max(asciiCharF,asciiCharS);
    let output = '';
    for (let i = min + 1; i < max; i++) {
        output+= (String.fromCharCode(i) +' ');
    }
    console.log(output);
}
  