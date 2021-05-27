//Question 1

var firstNumber = 34;
var secondNumber = 89;

if(firstNumber < secondNumber) {
    console.log("The first number is smaller than the second")
}

//Question 2

var age = 11;
var minimumAge = "13";

if(age >= parseInt(minimumAge)) {
    console.log("Minimum age met")
}
else{
    console.log("Minimum age not met")
}

//Question 3

var income = "11.050";
var maximumIncome = "13.075";

if (parseFloat(income) <= parseFloat(maximumIncome)) {
    console.log("Maximum income requirement met")
}
else {
    console.log("Maximum income requirement not met")
}

//Question 4

var studentAge = 13;
var skole;

if (studentAge >= 6 && studentAge <= 13) {
    skole = "Barneskole";
}
else if (studentAge >= 14 && studentAge <= 16) {
    skole = "Ungdomsskole";
}
else if (studentAge >= 15 && studentAge <= 19) {
    skole = "Videregående";
}
else {
    skole = "Invalid age";
}

console.log(skole);

//Question 5

var colour = "blue";

if (colour === "orange") {
    console.log("This colour is a bit rubbish")
}

//Question 6

var invoicePaid = false;

if(invoicePaid === false) {
    console.log("Not paid");
}

//Question 7

var selectedNumber = 11;
var winningNumber = "15";

if(selectedNumber !== parseInt(winningNumber)) {
    console.log("You lose again")
}

//Question 8

var dayOfTheWeek = 3;
var day;

switch(dayOfTheWeek) {
    case 1:
        day = "Monday"
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednesday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "Saturday"
        break;
    case 7:
        day = "Sunday"
        break;
    default:
        day = "Invalid day number"
}

console.log(day)