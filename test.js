function twoNumberSum(array, targetSum) {
    let hash = {}
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        const diff = targetSum-number
        if(hash[diff]){
            return [hash[diff],number]
        }
        hash[number] = number
    }
    return []
}

