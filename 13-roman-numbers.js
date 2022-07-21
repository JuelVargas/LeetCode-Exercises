
//const a = [I, V, X, L, C, D, M];
function romanToInt(s) {
    const ro = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let arr = [];

    for(let i=0; i<s.length; i++){
        if(ro[s[i]] < ro[s[i + 1]]){
            arr.push(ro[s[i + 1]] - ro[s[i]])
            i++
            continue
        }else{
            arr.push(ro[s[i]])
        }
    }

    let ans = 0;
    for( a of arr){
        ans += a;
    }

    return ans
};

console.log(romanToInt('III'))