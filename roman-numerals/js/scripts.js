//Business Logic
var rnChars = ["M","D","C","L","X","V","I"];
var rnVals = [1000,500,100,50,10,5,1];

var toRoman = function(n) {
  var outputString = "";
  // debugger;
  for (var i = 0; i < rnChars.length; i++) {
    var charsToAdd = "";
    while (n >= rnVals[i]) {
      n -= rnVals[i];
      charsToAdd += rnChars[i];
    }
    outputString += charsToAdd;
  }

  var numeralSubraction = function(subtractString, i) {
    subtractString = "rnChars[i]" + "rnChars[i-1]";
    return subtractString;
  }


  return outputString;
}
//User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("#input").val());
    if (inputNumber > 3999 || inputNumber < 1 ) var result = "Please enter a number between 1 and 3999.";
    else var result = toRoman(inputNumber);
    console.log(result);
  });
});
