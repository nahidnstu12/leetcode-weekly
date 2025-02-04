var removeDuplicates = function(nums) {
    const modSet = new Set(nums)
    nums = [...modSet]
    console.log(nums);
    
    return modSet.size;
};

console.log(removeDuplicates([1,1,2]))