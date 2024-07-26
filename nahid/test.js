const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 3],
];
let fisrt = 0,
  second = 0;

// for (let i = 0; i < arr.length; i++) {
//   fisrt += arr[i][i];
// }
for (let j = arr.length - 1, i = 0; j >= 0; j--, i++) {

  second += arr[i][j];
  fisrt += arr[i][i];
}
let finalRes = fisrt * second;
console.log(finalRes);
