exports.isPalindrome=(str)=> {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const result = str.replace(regex, '');

    var len = result.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (result[i] !== result[len - 1 - i]) {
            return false;
        }
    }
    return true
    

}

 
exports.isAnagram=(str1)=> {

    // TODO add initial checking
    // TODO add harcode check

    // remove punctations
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    var result1 = str1.replace(regex, '');
    var result2 = result1.split("").reverse().join('')

    console.log(result1, ": ============== :",result2)

    return result1.toLowerCase() == result2.toLowerCase()
    

}

 
exports.reverseStringManualy=(str1)=> {
    try {
        // remove punctations
        const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        var result1 = str1.replace(regex, '');
    
        return new Promise((resolve, reject)=>{
            let newStr =''
            for (let index = result1.length-1; index >=0; index--) {
                const element = result1[index];
                console.log(element)
                newStr+=element
            }
            resolve(newStr)
        })
    } catch (error) {
        // TODO log 
        console.log(error)
        throw error
    }

}


exports.letterFrequency = (str1) => {
    try {
        // remove punctations
        const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        var result1 = str1.replace(regex, '');

        return new Promise((resolve, reject) => {
            var freq = {};
            for (var i = 0; i < result1.length; i++) {
                var character = result1.charAt(i);
                if (freq[character]) {
                    freq[character]++;
                } else {
                    freq[character] = 1;
                }
            }
            resolve(JSON.stringify(freq));
        })
    } catch (error) {
        // TODO log
        throw error
    }

}


exports.randomStringGenerator = (args) => {
    try {
        const { length, isAlpha, isNumeric } = args
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var numbers = '0123456789';
        selectionChars = ""

        if (isAlpha) {
            selectionChars += characters
        }
        if (isNumeric) {
            selectionChars += numbers
        }
        console.log(args, selectionChars)

        var charactersLength = selectionChars.length;
        for (var i = 0; i < length; i++) {
            result += selectionChars.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;

    } catch (error) {
        throw error
    }

}


exports.randomColorGenerator = (alpha) => {
    try {
        if (alpha) {
            return "rgba(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.random() + ")";
        }
        return "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";

    } catch (error) {
        throw error
    }

}

