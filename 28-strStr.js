var strStr = function (haystack, needle) {
    if (needle.length == 0) {
        return 0
    }
    if (haystack.includes(needle)) {

        let a = needle.split('')
        let b = haystack.split('')

        for (let i = 0; i < haystack.length; i++) {

            if (haystack[i] == needle[0]) {

                let needlecont = 1;

                for (let j = 1; j < needle.length; j++) {
                    if (haystack[i + j] == needle[j]) {
                        needlecont++
                    }else{
                        needlecont = 1;
                    }
                }

                if(needlecont == needle.length){
                    return i
                }

            }
        }

    } else {
        return -1
    }
};

console.log(strStr('mississippi', 'issip'))