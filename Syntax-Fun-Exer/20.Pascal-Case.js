function pascalCase(text){
    let output = '';
    for (const symbol of text) {
        const charCode = symbol.charCodeAt(0);

        if(charCode >= 65 && charCode <= 90){
            if(output.length>0){
                output += ', ';
            }
            output += symbol;
        
        }else{
            output += symbol;
        }
    }
    console.log(output);
}