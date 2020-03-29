let numberList = [1, 2, 3, 4, 5, 6];
let even = numberList.filter((v, i, array) => v % 2 === 0);
let sum = numberList.reduce((a, b) => a + b);
console.log('even : ', even);
console.log('sum : ', sum);
