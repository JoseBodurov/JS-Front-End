function solve(names){
    return [...names]
    .sort((a,b) => a.localeCompare(b))
    .map((e,index)=> `${index +1}.${e}`)
    .join('\n');
}
