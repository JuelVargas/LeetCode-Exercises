var addBinary = function(a, b) {
    let ans = (BigInt('0b' + a)+BigInt('0b' + b)).toString(2); 
    return ans
};