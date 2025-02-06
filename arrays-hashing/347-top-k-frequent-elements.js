/**
 * LeetCode #347 - Top K Frequent Elements
 * Category: ARRAY
 * Difficulty: TODO: Add difficulty (Easy/Medium/Hard)
 */


function solution2(nums, k) {
    if (nums.length == 1 && k == 1) return nums
    const mapping = nums.reduce((acc, cur) => {
        if (acc[cur]) {
            acc[cur]++
        } else {
            acc[cur] = 1
        }
        return acc;
    }, {}) //{ '1': 3, '2': 2, '3': 4 }
    
    

    let values = Object.values(mapping).sort((a, b) => b - a).slice(0, k) //[4, 3]
    let arr = []

    for (let i in mapping) {
        values.some(inn => {
            if (mapping[i] == inn) {
                arr.push(+i)
                return true
            }
        })
    }

    return arr // [1,3]
}

function solution(nums, k) {
    if (nums.length == 1 && k == 1) return nums
    const heapMap = new Map();
    let arr = []

    nums.forEach(i => {
        if (heapMap.has(i)) {
            // heapMap.get(i)[1]++;
            heapMap.set(i, [i, ++heapMap.get(i)[1]])
        } else {
            heapMap.set(i, [i, 1])
        }
    })
    console.log(heapMap);
    for (let [i, val] of heapMap) {
        
        if (arr.length < k) {
            // insert arr
            arr.push(val)
            bubbleUp(arr, arr.length - 1)

        } else if(val[1] > arr[0][1]) {
            // pop element 
            arr[0] = val;
            bubbleDown(arr, 0)


        }

    }


    return arr.map(i => i[0])
}

function bubbleUp(heap, index){
    while(index> 0){
        let parentIndex = Math.floor((index-1)/2);

        if(heap[parentIndex][1]> heap[index][1]){
            [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
            index = parentIndex;
        }else{
            break;
        }
    }
}

function bubbleDown(heap, index){
    while(true){
        let smallest = index
        let leftChild = 2 * index + 1
        let rightChild = 2 * index + 2

        if(leftChild < heap.length && heap[leftChild][1] < heap[smallest][1]){
            smallest = leftChild;
        }
        if(rightChild < heap.length && heap[rightChild][1] < heap[smallest][1]){
            smallest = rightChild
        }
        if(smallest === index) break;

        [heap[index], heap[smallest]] = [heap[smallest], heap[index]]
        index = smallest;
    }
}

// Example Usage
console.log(solution2([1, 1, 1, 2, 2, 3, 3, 3, 3, 4,4,5,5,2,2,2], 2));
console.log(solution2([1,2], 2));
// Output: [1,3]
