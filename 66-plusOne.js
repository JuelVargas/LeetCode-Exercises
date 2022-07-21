var plusOne = function(digits) {
    let ans = digits.length - 1
    while(digits[ans] == 9){
        digits[ans] = 0;
        ans--
    }

    if(ans == -1){
        digits.unshift(1)
    }

    digits[ans] += 1

    return digits
};

console.log(plusOne([9,9]))