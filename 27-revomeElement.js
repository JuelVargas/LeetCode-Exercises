/* var removeElement = function(nums, val) {

    for( let i = 0; i < nums.length; i ++){
        if(val == nums[i]){
            nums.splice(i,1)
        }
    }
    let a = 0

    for(j of nums){
        a++
    }

    return a
};
 */
/* var removeElement = function(nums, val) {
    let ans = []

    for(let i = 0; i < nums.length; i++){
        ans.push(nums[i])
        if(ans[ans.length - 1] == val){
            ans.pop()
        }
    }

    return ans.length
}; */

var removeElement = function(nums, val) {
	if (nums.length == 0) {
		return nums;
	}

	let i = 0;
	while (i < nums.length) {
		if(nums[i] == val) {
			nums.splice(i,1);
		} else {
			i++;
		}

	}
	return nums;
};

console.log(removeElement([3,2,2,3], 3))