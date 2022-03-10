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


// function isValidSubsequence(array, sequence) {
//     let arrayIdx = 0
//     let sequenceIdx = 0
//     while(arrayIdx < array.length && sequenceIdx < sequence.length){
//         if (array[arrayIdx] === sequence[sequenceIdx]) sequenceIdx++
//         arrayIdx++
//     }
//     return sequenceIdx === sequence.length
//   }

// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[5, 1, 22, 22, 25, 6, -1, 8, 10]));

// function tournamentWinner(competitions, results) {
//     const bookKeeping = {}
    
//     for (let index = 0; index < results.length; index++) {
//         const element = results[index];
//         let temp;
//         if (element === 1) temp = 0
//         if (element === 0) temp = 1
//         if (bookKeeping[competitions[index][temp]]){
//         bookKeeping[competitions[index][temp]] += 1
//         }
//         else{
//             bookKeeping[competitions[index][temp]] = 1
//         }


//     }
//     return(Object.keys(bookKeeping).reduce((a, b) => bookKeeping[a] > bookKeeping[b] ? a : b))
//   }

// console.log(tournamentWinner([["HTML", "C#"],
// ["C#", "Python"],
// ["Python", "HTML"]],[0, 0, 1]));

// function nonConstructibleChange(coins) {
//     coins.sort((a,b) => a-b)
//     let currentSum = 0
//     for (coin in coins){
//         let currentCoin = coins[coin]
//         if (currentCoin > currentSum+1) return currentSum+1
//         currentSum+=currentCoin
//     }
//     return currentSum+1;
//   }

// console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))

class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  let nodes = [
    {"id": "10", "left": "5", "right": "15", "value": 10},
    {"id": "15", "left": "13", "right": "22", "value": 15},
    {"id": "22", "left": null, "right": null, "value": 22},
    {"id": "13", "left": null, "right": "14", "value": 13},
    {"id": "14", "left": null, "right": null, "value": 14},
    {"id": "5", "left": "2", "right": "5-2", "value": 5},
    {"id": "5-2", "left": null, "right": null, "value": 5},
    {"id": "2", "left": "1", "right": null, "value": 2},
    {"id": "1", "left": null, "right": null, "value": 1}
  ]

let tree = new BST (nodes[0])
let tree1 = new BST (nodes[1])
if (tree.left || tree.right){
    console.log(tree)
    console.log(tree.left)
    console.log(tree.right)

}
  console.log(tree)