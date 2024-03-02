// Function to shout a string (convert to uppercase)
function shout(string) {
    return string.toUpperCase();
  }
  
  // Function to whisper a string (convert to lowercase)
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // Function to log a shout (uppercase version of a string)
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // Function to log a whisper (lowercase version of a string)
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // Function to respond to Grandma based on the case of the string
  function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "I love you, Grandma.") {
      return "I love you, too.";
    }
  }
  
  module.exports = { shout, whisper, logShout, logWhisper, sayHiToGrandma };
  