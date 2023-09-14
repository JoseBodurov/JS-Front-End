function carWash(...com){
let azz = com.slice(', ');
let newArr = azz;
let car = 0;
for (let current = 0; current < azz.length; current++) {
    let element = azz[current];
    switch(element){
        case 'soap':
        car += 10;
        break;
        case 'water':
        car *= 1.2;
        break;
        case 'vacuum cleaner':
        car *= 1.25;
        break;
        case 'mud':
        car *= 0.9;
        break; 
    }
}
console.log(`The car is ${car.toFixed(2)}% clean.`)
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])