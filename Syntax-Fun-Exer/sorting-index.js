let number = [2121,424,123,44,3];
let names = ['Kiro','Asq','Pesho']
let sortedAsc = [...number].sort((a,b)=>{
    let result = a- b;
    return result;
});
let sortedDsc = [...number].sort((a,b)=>{
    let result = b-a;
    return result;
});

let sortedNamesAsc = [...names].sort((a,b)=>{
    let result = a.localeCompare(b);
    return result;
});

let sortedNamesDsc = [...names].sort((a,b)=>{
    let result = b.localeCompare(a);
    return result;
});
