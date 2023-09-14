function cookingByNum(numAsString,...operations){
let num = Number(numAsString);
operations.forEach((op)=> {
    switch(op){
        case'chop':
        num /= 2;
        break;
        case 'dice':
        num = Math.sqrt(num);
        break;
        case 'spice':
        num += 1;
        break;
        case 'bake':
        num *= 3;
        break;
        case 'fillet':
        num -= num*0.2;
        break;
    }
    console.log(num)
})
}