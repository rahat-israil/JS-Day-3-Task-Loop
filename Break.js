/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/



for (let i = 1; i <= 200; i++) {
  if (i === 100) {
      break;
  }
  console.log(i);
}


/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/


let sum = 0;
let number = 1;

while (number <= 200) {

  sum = sum + number;
  
  if (sum >= 100) {
    break;
  }
  number++ ;
  
}
console.log(sum);
