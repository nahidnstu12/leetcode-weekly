// var containsDuplicate = function(nums) {
//   const uniq = new Set(nums);
//   return uniq.size !== nums.length
//
// };

var containsDuplicate = function(nums) {
 const hash = {}
  for(let i of nums) {
    if(hash[i]){
      return true;
    }

    hash[i] = true;

  }

  return false;

};

console.log(containsDuplicate([1,2,3,1]));