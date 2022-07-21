var lengthOfLastWord = function(s) {
    let arr = s.split(' ')
    let ans = []

    for( let i = arr.length - 1; i >= 0; i--){
        if(arr[i] == ''){
            continue
        }else{
            ans.push(arr[i])
            break
        }
    }
    
    return ans.toString().split('').length

};

console.log(lengthOfLastWord("Hello World"))