// Create a simple mad-lib program that prompts for a noun,
// a verb, an adverb, and an adjective and injects those into a
// story that you create.

var noun = prompt("Enter a noun", "dog");
var verb = prompt("Enter a verb ", "walk");
var adjective = prompt("Enter a adjective", "blue");
var adverb = prompt("Enter a adverb", "quickly");


function Random_value(words) {
    return words[Math.floor(Math.random()*words.length)];  
    Random_value(words); //recurively calling.
}
  
const words = ["you", "still", "look", "can" , "?", "that's", "hilarius"];
// console.log(Random_value(words));

const message = `${noun}, ${adverb} ` + Random_value(words);
document.getElementById("root").innerHTML = message;


//Need a recursive function to work upon!
//for loop may work for specified limits e.x calling the Random_value function for each iterartion on i;