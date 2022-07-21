/* var isPalindrome = function(head) {
    let aux = [...head];
    head.reverse()
    return aux.toString() == head.toString()
} */

/* var isPalindrome = function(head) {
    
    let aux = []

    for(let i=0; i<head.length; i++){
        aux.unshift(head[i])
    }
    console.log(head.toString())
    console.log(aux.toString())
    return aux.toString() == head.toString()
} */

/* var isPalindrome = function(head){
    let palindrome = true;

    for(let i = 0; i < head.length / 2; i++){
        if (head[i] !== head[head.length -i -1]){
            palindrome = false;
            break
        }
    }
    return palindrome
} */

/* var isPalindrome = function(head){
    let reversed = ''
    let str = head.toString()
    
    for(let i of str){
        reversed = i + reversed
        console.log(reversed)
    }

    
    return (reversed.toString() == str.toString())
} */

var isPalindrome = function(x) {
    let aux = x.toString().split('')

    let ans = []
    for(let i of aux){
        ans.unshift(i)
    }
    return x.toString() == ans.join('')
};

console.log(isPalindrome(10))




