// function twoNumberSum(array, targetSum) {
//     array.sort((a,b) => a - b)
//     let l = 0
//     let r = array.length - 1

//     while (r > l){
//         if (array[l]+array[r] === targetSum){
//             return [array[l],array[r]]
//         }
//         else if (array[l]+array[r] < targetSum){
//             l++
//         }
//         else{
//             r--
//         }
//     }    
//     return []
// }


// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6],10))


function isValidSubsequence(array, sequence) {
    let arrayIdx = 0
    let sequenceIdx = 0
    while(arrayIdx < array.length && sequenceIdx < sequence.length){
        if (array[arrayIdx] === sequence[sequenceIdx]) sequenceIdx++
        arrayIdx++
    }
    return sequenceIdx === sequence.length
  }

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[5, 1, 22, 22, 25, 6, -1, 8, 10]));