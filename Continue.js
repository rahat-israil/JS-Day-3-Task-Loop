/* 

Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.

*/


for (let i = 1; i <= 40; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}



/*

display odd number from 55 to 85 and skip the numbers divisible by 5.

*/


for (let i = 55; i <= 85; i++) {
  // Check if the number is odd and not divisible by 5
  if (i % 2 === 1 && i % 5 !== 0) {
    console.log(i);
  }
}
