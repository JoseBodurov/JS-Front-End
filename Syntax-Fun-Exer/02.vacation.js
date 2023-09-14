function vacation(num,group,day){
let totalPrice;
switch(group){
    case'Students':
    if(day==='Friday'){
        totalPrice = num * 8.45;
     }else if(day==='Saturday'){
        totalPrice = num * 9.80;
     }else if(day==='Sunday'){
        totalPrice = num * 10.46;
     }
     if(num>=30){
        totalPrice = totalPrice*0.85;
     }
    break;
    case'Business':
    if(num >=100){
        num -= 10;
     }
    if(day==='Friday'){
        totalPrice = num * 10.90;
     }else if(day==='Saturday'){
        totalPrice = num * 15.60;
     }else if(day==='Sunday'){
        totalPrice = num * 16;
     }
     
    break;
    case'Regular':
    if(day==='Friday'){
        totalPrice = num * 15;
     }else if(day==='Saturday'){
        totalPrice = num * 20;
     }else if(day==='Sunday'){
        totalPrice = num * 22.50;
     }
     if(num>=10 && num <= 20){
        totalPrice = totalPrice*0.95;
     }
    break;
}
console.log(`Total price: ${totalPrice.toFixed(2)}`);
}