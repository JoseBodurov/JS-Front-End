function store(stock,orderedProd){
    let store = {};
    let combined = [...stock,...orderedProd];
    for (let index = 0; index < combined.length; index++) {
        let prop = combined[index];
        if(index % 2 === 0 ){
            if(!store.hasOwnProperty(prop)){
                store[prop] = 0;
            }
        }else{
            let value = Number(prop);
            let previousProp = combined[index - 1];
            store[previousProp] += value;
        }  
    }
    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }
}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);