console.log('test');
/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true
*/
const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];

//makes first letter of grettings capital letters
function firstLetterUpperCase(word) {
       return (firstletter = word.charAt(0).toUpperCase()) + word.slice(1);
}


/**
 @param {string} name
        name of person
 @param  {string} gender
        Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/
function greeting(name, gender, isSelf) {

    //sets the greeting for the sentence
    const greeting = firstLetterUpperCase(greetingWords[Math.floor(Math.random()*greetingWords.length)]);


    //sets the prefix for the sentence
   if(isSelf == true){
          prefix = "my";
   } else {
          if(gender == "male"){
                 prefix = "his"
          } else if (gender == "female"){
                 prefix = "her"
          } else {
                 prefix = "their"
          }
   }

    return  `${greeting}, ${prefix} name is ${name}`; // use template literal for string to return
  }

console.log(greeting("Kyle", "male", true));
 // Hi, my name is Kyle

console.log(greeting("Elizabeth", "nonbinary", false));
 // Hey, their name is Elizabeth

 console.log(greeting("Erin", "female", false));
 // Hello, her name is Erin