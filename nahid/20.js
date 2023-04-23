/**
 * @param {string} s
 * @return {boolean}
 * Input: s = "()[]{}"
 * Output: true
 * ({}) (()) [{()}]
 * ()(({{)})
 */
// var isValid = function (s) {
//   const ps = s.split("");
//   const store = [];
//   if (ps.length % 2 === 0) {
//     ps.forEach((item, index) => {
//       if (item === "(") {
//         store.push("(");
//       } else if (item === "{") {
//         store.push(item);
//       } else if (item === "[") {
//         store.push(item);
//       } else if (item === ")") {
//         store.splice(index, 1);
//       } else if (item === "}") {
//         store.splice(index, 1);
//       } else if (item === "]") {
//         store.splice(index, 1);
//       }
//     });
//   }
//
//   console.log(ps, ps.length, store);
//   return store.length === 0;
// };
var isValid = function (s) {
  const ps = s.split("");
  const store = [];
  let ck = 0;

  ps.forEach((i, idx) => {
    if (ps.length !== idx + 1 && ps.length % 2 === 0) {
      if (i === "(" && ps[idx + 1] === ")") {
        ck = 1;
      } else if (i === "{" && ps[idx + 1] === "}") {
        ck = 1;
      } else if (i === "[" && ps[idx + 1] === "]") {
        ck = 1;
      } else {
        ck = 0;
      }
    }
  });

  console.log(ps, ps.length, ck);
  return ck === 1;
};

// console.log(isValid("()[]{}"));
console.log(isValid("({})"));
