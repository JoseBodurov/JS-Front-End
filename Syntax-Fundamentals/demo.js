function solve(  string,search ){
let splitted = string.split(' ');
let counter = 0;
for (const iterator of splitted) {
    if(iterator === search){
        counter++;
    }
}
console.log(counter);
}
