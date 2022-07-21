/* var isValid = function(s){
    let aux = s.split('')

    if(s.length % 2 == 0){
        for(let i = 0; i < aux.length ; i++){
            let a = aux.shift();
            let b 
            switch(a){
                case '(': b = ')';
                break;
                case '[': b = ']';
                break;
                case '{': b = '}';
                break;
                default: continue;
            }
            console.log(b)
            for (let j = 0; j < aux.length ; j++){
                if(aux[j] == b){
                    aux.splice(j,1)
                    i= 0
                    break
                }
            }
        }

    }
    return aux.length == 0
} */

var isValid = function (s) {
    let r = [];
    for (const e of s) {
        e === '(' ? r.push(')') : e === '[' ? r.push(']') : e === '{' ? r.push('}') : '';
        if (')]}'.includes(e))
            if (r[r.length - 1] === e) r.pop();
            else return false
    }
    return !r.length
};



console.log(isValid('([)]'))