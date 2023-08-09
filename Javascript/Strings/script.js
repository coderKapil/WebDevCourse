// const collectionOfWords = ["Hello", "World", "In", "a", "Frame"];
// console.log(collectionOfWords[2]);

// const name = "Anshu Raj";
// console.log(name[6]);

// const channelName = 'Do Some Coding'

// const message = 'Don't Do this';

//method 1 for fixing above string
// const message = "Don't Do this";

//method 2
// const message = 'Don\'t Do this \'';
// const message = "Don\"t Do this";

// for creating new line inside string ->  " \n "
// const message =
// //   "This is best course on entire youtube. \n I am providing Pratice Questions too ";

// for creating space inside string => " \t "
// const message = " Subscribe \t \t this channel ";

// console.log(message);

//Template Literals
// const name = "Kapil Rana";

// const message = "Hello Kapil how are you ? ";

// const greeting = (name) => {
//   //old method
//   //   console.log("Hello " + name + " how are you ?");
//   //new method
//   console.log(`Hello ${name} how are you ?`);
// };

// greeting("Kapil");

// String Methods

// Change String to Upper Case

// channel.toUpperCase(); //  -> "DO SOME CODING"

// Change String to Lower Case

// channel.toLowerCase(); //  -> "do some coding"

// Trim Text from String
// const greeting = "   Hello world!   ";

// console.log(greeting);
// Expected output: "   Hello world!   ";

// console.log(greeting.trim());
// Expected output: "Hello world!";

// Get length of string

// channel.length; //  -> 14

// Get character at index

// channel.charAt(0); //  -> "D"

// Get character code at index

// channel.charCodeAt(0); //  -> 68
// console.log(channel.charCodeAt(1));

// Match o in string

// channel.match(/o/g); //  -> ["o", "o"]

// Replace Coding with Learning

// channel.replace("Coding", "Learning"); //  -> "Do Some Learning"
// console.log(channel.replace("Coding", "Learning"));
// console.log(channel.replaceAll("o", "e"));
// Split string into array

// channel.split(" "); //  -> ["Do", "Some", "Coding"]
// console.log(channel.split(" ")[0]);
// console.log(channel.split("o"));

// Concatinate string "Do Some Coding" with " is fun"

// channel.concat(" is fun"); //  -> "Do Some Coding is fun"
// console.log(channel.concat(" is fun"));

// Get Sub String from index 3 to 7

// channel.substring(3, 7); //  -> "Some"
// console.log(channel.substring(3, 7));

const channel = "Do Some Coding";

//  Check channel start with "Do"

// channel.startsWith("Do"); //  -> true
// console.log(channel.startsWith("Do"));

// Check channel end with "ing"

// channel.endsWith("ing"); //  -> true
// console.log(channel.endsWith("ing"));

// Check channel includes "Some"

// channel.includes("Some"); //  -> true
// console.log(channel.includes("Some"));

// Get index of "Some"

// channel.indexOf("Some"); //  -> 3
// console.log(channel.indexOf("Some"));

// Get last index of "o"

// channel.lastIndexOf("o"); //  -> 9
// console.log(channel.lastIndexOf("o"));

// Search string
// const paragraph =
//   "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

// Any character that is not a word character or whitespace
// const regex = /\bDog\b/gi;

// paragraph.search(regex); //  -> 40
