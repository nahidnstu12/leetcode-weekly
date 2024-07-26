const arr1 = [1, 3];
const arr2 = [4, 6, 8, 9, 11, 23];
// const arr1 = [1, 3];
// const arr2 = [4, 6];
// two sorted array, make new sorted array
function buildArray(arr1, arr2) {
  let a1 = 0,
    a2 = 0,
    a3 = 0;
  let arr3 = [];
  while (a3 <= arr1.length + arr2.length - 2) {
    if (arr1[a1] <= arr2[a2]) {
      // smallar value in aarr2
      arr3.push(arr1[a1]);
      a1++;
      a3++;
    } else {
      // smallar value in aarr1
      arr3.push(arr2[a2]);
      a2++;
      a3++;
    }
  }
  if (a1 < arr1.length) {
    arr3.push(arr1[a1++]);
  }
  if (a2 < arr2.length) {
    arr3.push(arr2[a2++]);
  }

  return arr3;
}

// reverse string using 2pointer
function reverseArr(arr) {
    // [4, 6, 8, 9, 11, 23];
    // [23, 11, 9, 8, 6, 4]
  let temp;
  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr
}

function checkPalindrom(str) {
     for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
        if(str[i] !== str[j]){
            return "not palindrom"
        }

     }
     return "palindrom"
}

function swap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return { a, b };
}

// console.log(swap(10, 20));

//123456 -> 654321

// console.log(buildArray(arr1, arr2));
// console.log(reverseArr(arr2));
// console.log(checkPalindrom('raceacar'));
