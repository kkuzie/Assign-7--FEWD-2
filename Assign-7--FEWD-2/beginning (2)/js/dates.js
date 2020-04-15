/*eslint-env browser*/


//STEP 1 DONE
// Create an application that gets the number of days in a month. 
// Display that result within the console window.

let mth = prompt('Step 1 - name a month 1 - 12');
let getDaysInMonth = function(month,year) {
    if(mth == 2){
        return ('28 days in Feb but every 4 years this month has 29 days');
    } else {
        return new Date(year, mth, 0).getDate();
    }
 };
  console.log(getDaysInMonth(1, 1975));


let anno = prompt("Step 1(another way) - Enter a year ", "XXXX");
let mesi = ['gen', 'feb', 'mar', 'apr', 'mai', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'];
let giorni;

for (let i = 0; i < 12; i++) {
    giorni = new Date(anno, [i + 1], 0).getDate();
    console.log("In the year, " + anno + ", there are " + giorni + " days in " + mesi[i])
}

//STEP 2 DONE
// Create an application that gets the month name from a particular date. 
//Display that result within the console window.

let dateInput = prompt('Step 2 - enter a date');
let date = new Date (dateInput);

console.log(date);
console.log('Month name:', date.toLocaleString('it-IT', {month: 'long'}));

//STEP 3
// Create an application that tests whether a date is a weekend. Display that result within the console window.

//WHY DAY IS ALWAYS WEEKDAY??
let isDate = prompt('Step 3 - enter a date');
let weekend =  function(isDate){
    let data = new Date(isDate);
     
    if(data.getDay() == 6 || data.getDay() == 0)
       {
        return "weekend";
        } else {
            return "weekday";
        }
};

console.log(isDate + " is a " + weekend());


//STEP 4
// Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.

//WHY NOT CHANGING TO DAY NOT NUMBER
let ieri =  function(){
    var dataIeri = new Date()-1;
    var giorno =  dataIeri.getDay();
        return giorno.toLocaleString("it-IT", { weekday : "long"});
};

console.log("Step 4 - yesterday's day of the week was " + ieri());


//STEP 5 DONE
// Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.

var dateObj = new Date();
var weekday = dateObj.toLocaleString("default", { weekday: "long" });
console.log(weekday);
let first = weekday.slice(0,1);
console.log("Step 5: " + first);

const d = new Date();
userDate = window.prompt("Enter a date (January 13, 2021)", d);
let d2 = new Date(userDate);
console.log("Step 5");
console.log(d2.toLocaleString('default', { weekday: 'narrow' }));