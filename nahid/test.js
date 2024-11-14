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
// console.log(finalRes);

let sum = 0;
let p1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
let p2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

Promise.all([p1, p2]).then((values) => {
  const sum = values[0] + values[1];
  console.log("inside>>",sum); // This will print 7
});
console.log(sum);
// p1.then((d) => console.log(d));
// p2.then((d) => console.log(d));
