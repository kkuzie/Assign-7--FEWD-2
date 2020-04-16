/*eslint-env browser*/

//STEP 1 DONE
// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Assume punctuation and number symbols are not included in the passed-in string.Sample Data and 
// OutputExample string: 'webmaster' 
// Expected Output: 'abeemrstw'

let dogs = "mylifewithdogs";
life = Array.from(dogs);
sort = life.sort();
// sort.toString();
console.log(sort.toString().replace(/,/g, ""));//betw // is what to remove, g stands for remove globally, then "" means replace with no space

//STEP 2 DONE
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.
// Sample Data and OutputExample string: 'the quick brown fox' 
//Expected Output: 'The Quick Brown Fox'

let phrase = prompt("Step 2", "enter a phrase");

function firstCap(phrase) {
    let sent = phrase.toLowerCase().split(' ');//change to lowercase and turn into array
console.log(sent);
    for (let i = 0; i < sent.length; i++) {//iterates thru sent array
        sent[i] = sent[i].charAt(0).toUpperCase() //gets each item in array, grabs the 1st char, changes it to uppercase and 
        + sent[i].substring(1);//gets item in array and adds back in the letters starting at index 1 (because we dont want the first letter again)
    }
    return sent.join(' ');//converts array back to string
}
console.log("Step 2 - " + firstCap(phrase));

//STEP 3 DONE
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Sample Data and OutputExample string: 'The quick brown fox' 
//Expected Output: 5

let phrase2 = prompt("Step 3", "enter another phrase");
let vowels = ['a', 'e', 'i', 'o', 'u'];//specify the vowels
let numVowels = 0;//initialize counter

function counter(text) {
    for (let letter of text.toLowerCase()) {//loop thru text to see if letter is a vowel
        if( vowels.includes(letter)) {
            numVowels++;//continue going thru array
        }
    }
    return numVowels;//return vowels
}
console.log("Step 3" + " - There are " + counter(phrase2) + " vowels in the phrase " + '"' + phrase2 + '"');

//STEP 3 VERSION 2:
function vcount(ltr) {

    let vowel = 'aeiouAEIOU';
    var count = 0;
  
    for(let i = 0; i < ltr.length ; i++)
    {
        if (vowel.indexOf(ltr[i]) !== -1)
        {
        count += 1;
        }
    }
    return count;
    }
console.log("Step 3 version 2" + " - There are " + vcount(phrase2) + " vowels in the phrase " + '"' + phrase2 + '"');

//STEP 4 DONE
// Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample Data and OutputExpected 
// Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA

let random = Math.random().toString(36).substr(2);//substr(2) removes the 0. in math.random()
console.log("Step 4 - this generates string of 11 characters: " + random);//returns 11 

let random2 = Math.random().toString(36).substring(2, 12);//substring (2, 12) returns 10 length (12-2=10) if want more or less, change 12 to another number...
console.log("Step 4 again - this generates a string of 10 random characters: " + random2);

// random("such String", 20); would return a string with 20 characters randomly made out of the given input string.


//STEP 5 DONE
// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Sample Data and OutputSample 
// function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

let country = prompt('Step 5 - list some countries(separated by a comma');

function bigCountry(country) {

    let longestWord = country.split(', ')//split into array by comma
    .sort(function(one, two) { //sorts words longest to shortest
        return two.length - one.length; });//by taking length of one word less another
        
        return longestWord[0];//then return longest word
  }
  console.log("Step 5 - The longest country name is " + bigCountry(country));


