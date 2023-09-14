function sortingNumbers(arr){
let sorted = [...arr].sorted((a,b)=> a - b);
let step = 0;
let result=  [];
while(arr.length >0){
    if(step %2 === 0){
        result.push(sorted.shift());
    }else{
        result.push(sorted.pop());
    }
    step++;
}
return result;
}
