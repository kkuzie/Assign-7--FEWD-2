/*eslint-env browser*/
 
//STEP 1 DONE
// Create an application that prompts the user for their name. 
// Then, find the length of characters in the person’s name.  
// Use the alert method to display the result.

let name = prompt('Step 1 - what is your name?');
let nameLength = name.length;
alert('you have ' + nameLength + ' characters in your name');

//STEP 2 DONE
// Create an application that prompts the user for their name. 
// Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. 
// Use the alert method to display the result.

let name2 = prompt('Step 2 - again, what is your name?');
let pickanum = prompt('pick a number between 1 and ' + name2.length);
alert('The number ' + pickanum + ' letter in your name is ' + name2[pickanum - 1]);

//STEP 3 DONE
// Create an application that prompts the user for their first name. 
// Then, prompt the user for their last name using a second prompt. 
// Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. 
// You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.

let first = prompt('Step 3 - what is your first name?');
let last = prompt('what is your last name?');
alert('your name is: ' + first + ' ' + last);

//STEP 4 DONE
// Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. 
// Then, find and display within an alert the index of the word “fox”.

let fox = "The quick brown fox jumps over the lazy dog";
    let words = function (str) {
        return str.trim().split(" ");
   };
   console.log(words(fox));
   let foxArray = words(fox);

   alert("Step 4 - the index of the word 'fox' is " + foxArray.indexOf('fox'));

//STEP 5 DONE
// Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. 
// Then, find and display within an alert the index of the last instance of the word “fox”.

let fox2 = "The quick brown fox jumps over the lazy fox";
let words2 = function (str) {
    return str.trim().split(" ");
};
console.log(words2(fox2));
let foxArray2 = words2(fox2);

alert("Step 5 - the index of the last instance of 'fox' is " + foxArray2.lastIndexOf('fox'));

//STEP 6 DONE
// Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. 
// Then, prompt the user for their full name. 
// Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. 
// Use the alert method to display the result.

let fox6 = "The quick brown fox jumps over the lazy dog";
let yourName = prompt('Step 6 - what is your full name again?');
let replace = fox6.replace("the lazy dog", yourName);
alert("Step 6 - " + replace);

//STEP 7 
// Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. 
// Then, prompt the user for a word. 
// Next, search for the word within the string that the user enters into the prompt. 
// Use the alert method to display the result.

let fox7 = "The quick brown fox jumps over the lazy dog";
let parola = prompt('enter a word from' + fox7);

// STEP 7 - THE INSTRUCTIONS DO NOT MAKE SENSE 

//STEP 8 DONE
// Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. 
// Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. 
// Use the alert method to display the uppercase result of new_string.

let old_string = fox7;
let new_string = old_string.substr(-12).toUpperCase();

alert("Step 8 - " + new_string);

//STEP 9 DONE
// Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. 
// Make sure to add space before and after the text so that appears very similar to the text here. 
// Use the alert method to display the lowercase result of the variable once the space has been trimmed off.

let fox9 = '            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
let lowerTrim = fox9.trim();

console.log(lowerTrim.toLowerCase());
alert('Step 9 - ' + lowerTrim.toLowerCase());

//STEP 10 DONE
// Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. 
// The user clearly forgot to capitalize the first letter in the sentence. 
// Programmatically capitalize the first letter in the sentence and display the result in an alert.

let fox10 = lowerTrim.toLowerCase();

    alert("Step 10 - " + fox10.charAt(0).toUpperCase() + fox10.slice(1));

