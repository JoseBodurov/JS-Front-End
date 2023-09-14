function towns(input){
    input
    .map((line)=> line.split(' | '))
    .map(([town,latitude,longitude]) => ({town,latitude : Number(latitude).toFixed(2),longitude : Number(longitude).toFixed(2)}))
    .forEach((townObj)=> console.log(townObj));
// let townss =[];
//     for (const line of input) {
//     let[town,latitude,longitude]=line.split(' | ');
//     const city = {
//         town,
//         latitude:Number(latitude).toFixed(2),
//         longitude:Number(longitude).toFixed(2)
//     }
//     townss.push(city);
// }
// for (const town of townss) {
//     console.log(town);
// }
}