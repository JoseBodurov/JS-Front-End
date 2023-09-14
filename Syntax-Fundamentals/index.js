function solve(array){
   for (let index = 0; index < array.length; index++) {
      array[index]=Number(array[index]);
   }
   let evenSum = 0 ;
   let oddSum = 0;
   for (let index = 0; index < array.length; index++) {
      if(array[index]%2==0){
         evenSum += array[index];
      }else{
         oddSum += array[index];
      }
   }
   let res = evenSum-oddSum;
   console.log(res);
}


// shift
//removes First
// unshift
//adds first
// pop
//removes last
// push
//adss last
//slice
//Makes a copy
//splice
//cuts / inserts if added
