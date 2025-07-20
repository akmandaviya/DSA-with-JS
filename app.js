//palindrome
let num = 121
let reversed = num.toString().split('').reverse().join('')
if(num === parseInt(reversed))  { 
    console.log(num, 'is palindrome of ', parseInt(reversed))
}


// searching algorithm, only works on sorted array
let arr = [1,2,3,4,5,6,7,8]
let target = 5
let found = false

// linear search 1D  ------> O(n)
for(let i=0; i<arr.length;i++) { 
    if(arr[i] === target) { 
        found = true
        console.log(target, 'found at', i, 'index')
    }
}

if(!found) { 
    console.log(target, 'not found')   
}

// linear search 2D ---------> O(nm)
let matrix = [ 
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

let target1 = 6
let flag = false

for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<matrix[i].length; j++) {
        if(matrix[i][j] === target1) { 
            flag = true
            console.log(target1, 'is at', i,j )
        }
    }
} 

if(!flag) {
console.log(target1, 'is not in 2d array')
} 

// binary search ------> O(logn)
let a = [1,2,3,4,5,6]
let b = 5

let left = 0
let right = a.length-1
let x = false

while(left <= right) { 
    let mid = Math.floor((left+right)/2)
    
    if(a[mid] === b) {
        x = true
        console.log(5, 'is the index of', 4)
         break
    }else if (a[mid] < b) { 
        left = mid + 1
    }
    else { 
        right = mid - 1
    }
}

if(!x)  { 
    console.log(b, 'is not found in given array')
}

//duplicates in a sorted array
let nums = [1,1,2,2,2,4,5,6,7,7,8]
let unique = [...new Set(nums)]
console.log(unique)

// two sum, with count of the pairs having 2 sum
let array = [1,2,3,4,5,6]
let k = 5
let counter = []

for (let i=0; i<array.length; i++)  { 
    for( j=i+1; j<array.length; j++) {
          if (array[i] + array[j] === k) {  
        counter.push([i,j])
        console.log([i,j])
        console.log(counter.length, 'count of pairs')
    }
    }
}

//sorting
let unsortedArr = [2,5,6,8,1,10,12,4,20]

//using sort()
let sortedArr1 = unsortedArr.sort((x,y) => x-y)
let sortedArr2 = unsortedArr.sort((x,y) => y-x)
console.log(sortedArr1)
console.log(sortedArr2)

//simple 2 loops
for(let i=0; i<unsortedArr.length-1; i++) { 
    for(let j=0; j<unsortedArr.length-i+1; j++)  { 
        //for descending  <
        if(unsortedArr[j] > unsortedArr[j+1]) { 
            let temp = unsortedArr[j]
            unsortedArr[j] = unsortedArr[j+1]
            unsortedArr[j+1] = temp
        }
    }
}
console.log(unsortedArr,'simple sort')

//bubble sort // sinking sort // excahnge sort
// best case O(N) worst case o(Nsqaure)
let swapped = false
for(let i=0; i<unsortedArr.length; i++) { 
    swapped = false
    for( let j=1; j<unsortedArr.length-i ; j++) { 
        if(unsortedArr[i] < unsortedArr[i-1]) {
            swapped = true
            let temp = unsortedArr[i]
            unsortedArr[i] = unsortedArr[i-1]
            unsortedArr[i-1] = temp
        }
        if(!swapped) break
    }
}
console.log(unsortedArr, "sort from bubble sort")

//selection sort // O(nsquare)
// here we are selecting and adding max element at the end
//we are decreasing the size of sub array
for( let i=0; i<unsortedArr.length; i++) { 
    let lastIndex = unsortedArr.length - i - 1
    let maxElementIndex = getMax(unsortedArr, lastIndex)
    let temp = unsortedArr[maxElementIndex]
    unsortedArr[maxElementIndex] = unsortedArr[lastIndex]
    unsortedArr[lastIndex] = temp  
}

console.log(unsortedArr, 'sorting from selection sort')

function getMax(arr, index) { 
    let max = 0 
    for (let i=0; i<=index; i++) { 
        if(arr[i] > arr[max]) { 
            max = i
        }
    }
    return max
}

//insertion sort 
//here we are taking first 2 elements ,sorting and moving to first 3 sorting and moving ahead in this way, 
//we are increasing the size of subarray

