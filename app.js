//......Chapter 21.....//

//.....write as it's as , if lower case we must write lower case. if upper case we must write upper case.....//

var district = prompt("Enter your District");

if (district === "tharparkar") {
  console.log(district = "You are allow!")
} else {
  console.log(district = "You are not allow!")
}

//.....here we write lower or upper case, that auto convert in lower case.....//
//.....lower case.....//


// var district = prompt("Enter your District");
// console.log(district.toLowerCase());


//.....here we write lower or upper case, that auto convert in upper case.....//
//.....upper case.....//

// var district = prompt("Enter your District");
// console.log(district.toUpperCase());


var name = "subhash rai";
var splitingWord = name.split(" ");



for (var i = 0; i < splitingWord.length; i++) {
  console.log(splitingWord[i][0].toUpperCase() + splitingWord[i].slice(1));
}

//.....Chapter 22.....//

var myName = prompt("Enter Your Name.");

console.log("length is =", myName.length)

var firstChar = myName.slice(0);
console.log("My name is = ", myName)
console.log("FirstChar =", firstChar.toUpperCase()[0])



console.log("_____________________");
console.log("_____________________");




var day = prompt("Enter a Day .");
var charsInDay = day.length;

if (charsInDay > 3) {
  dayAbbrev = day.slice(0, 3);
  console.log(day, "Abbr is = ", dayAbbrev)
}
console.log("Chars in day is = ", charsInDay)
console.log("length of day = ", day.length)



console.log("______________________");
console.log("______________________");

var cityToCheck = prompt("Enter city")
console.log("City name is = ", cityToCheck)

var firstChar = cityToCheck.slice(0, 1);
console.log("First char = ", firstChar)


var someChars = cityToCheck.slice(1);
console.log("Reminder letters = ", someChars)
console.log("First letter in UpperCase = ", firstChar.toUpperCase() + someChars)


//.....Chapter 23.....//

///.....indexOf for string.....///
var str = ("subhash rai poorani");
console.log("index no: of subhash rai poorani is = ", str.indexOf("r"));


var name = ("Alisha");
console.log("Index no: of Alisha is = ", name.indexOf("A"))



///.....indexof fot array.....///
var arr = ["apple", "grapes", "banana", "orange", "pineapple", "dates", "mango", "strabaries"];
console.log("Index no: fruits is = ", arr.indexOf("banana"))


var city = ["karachi", "hyderabad", "umerkot", "badin", "thatto", "mithi"];
console.log("Index no: of city is = ", city.indexOf("mithi"));


//.....Chapter 24.....//

var institute = ("saylani mass IT traning");
console.log("Character at = ", institute.charAt(14));


var fruit = ("banana");
console.log("Character at = ", fruit.charAt(0));


//.....Chapter 25.....//

var str = ("my name is subhash rai");
var newString = (str.replace('rai', 'poorani'));

console.log("Before use replace method = ", str);
console.log("After use replace method = ", newString);

console.log("_______________________________________________________");


var adydat = ("How are you")
var afterReplace = adydat.replace("you", "you ?")

console.log("Before use replace method = ", adydat);
console.log("After use replace method = ", afterReplace);


console.log("________________________________________________________");


var fruit = ("apple");
var alterFruitName = (fruit.replace("a", "A"))

console.log("Before replace method = ", fruit);
console.log("After replace method = ", alterFruitName);

console.log("________________________________________________________");

var aboutMe = ("How am i ?")
var corrResult = (aboutMe.replace("am", "are"));
var corrResult = (aboutMe.replace("i", "you"));

console.log(aboutMe);
console.log(corrResult);


console.log("________________________________________________________");

var para = ("we are  students and,  we are also teachers .");
var paraReplace = (para.replaceAll("we", "They"));
var paraReplace = (para.replace("s", "S"));
console.log("Before replace = ", para);
console.log("After replace = ", paraReplace);



