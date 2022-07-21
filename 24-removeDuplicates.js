var removeDuplicates = function(nums) {

    let arr = new Set(nums)
    
    let ans = []

    for(let i of arr ){
        ans.push(i)
    }

    return [...ans]

};

console.log(removeDuplicates([1,1,2]))