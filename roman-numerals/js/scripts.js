//Business Logic
var rnChars = ["M","D","C","L","X","V","I"];
var rnVals = [1000,500,100,50,10,5,1];

var toRoman = function(n) {
  var outputString = "";
  // debugger;
  for (var i = 0; i < rnChars.length; i++) {
    while (n >= rnVals[i]) {
      n -= rnVals[i];
      outputString += rnChars[i];
    }
  }

  return outputString;
}
//User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("#input").val());
    var result = toRoman(inputNumber);
    console.log(result);
  });
});
