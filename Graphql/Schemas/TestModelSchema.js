exports.testModelSchema = `  
 

type Query{

  isPalindromeString(currentString:String!,): Boolean!

  isAnagramString(currentString:String!,): Boolean!

  reverseStringManualy(currentString:String!,): String!

  letterFrequency(currentString:String!,): String!

  randomStringGenerator(length:Int!, isAlpha:Boolean!, isNumeric:Boolean): String!
  
  randomColorGenerator(isAlpha:Boolean): String!
}

 
`;