require('dotenv').config()

const {isPalindrome, isAnagram, reverseStringManualy, letterFrequency, randomStringGenerator, randomColorGenerator} = require("../../Helpers/Util")


module.exports = {
    Query: {
        isPalindromeString: async (parent, args)=>{
            try{
                var { currentString } = args
                
                // check palindrome string and return Boolean
                return isPalindrome(currentString)
                
            } catch(err){
                console.log('Hata alindi ', err);
            }
        },
        isAnagramString: async (parent, args)=>{
            try{
                console.log("-----------------------isAnagramString----------------------------",args);
                var { currentString } = args
                
                // check palindrome string and return Boolean
                return isAnagram(currentString)
                
            } catch(err){
                console.log('Hata alindi ', err);
            }
        },
        reverseStringManualy: async (parent, args)=>{
            try{
                console.log("-----------------------reverseStringManualy----------------------------",args);
                var { currentString } = args
                
                return reverseStringManualy(currentString)
                
            } catch(err){
                console.log('Hata alindi ', err);
            }
        },
        letterFrequency: async (parent, args)=>{
            try{
                console.log("-----------------------letterFrequency----------------------------",args);
                var { currentString } = args
                
                return letterFrequency(currentString)
                
            } catch(err){
                console.log('Hata alindi ', err);
            }
        },
        
        randomStringGenerator: async (parent, args)=>{
            try{
                
                return randomStringGenerator(args)
                
            } catch(err){
                console.log('Hata alindi ', err);
            }
        },

        randomColorGenerator: async (parent, args)=>{
            try{
                var { isAlpha } = args
                return randomColorGenerator(isAlpha)
                
            } catch(err){
                console.log('Hata alindi ', err);
            }
        },
    },
    // Mutation: {
    // },
}
