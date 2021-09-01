document.getElementById("add").addEventListener("click",
function(){
  var num1 = parseInt(document.getElementById('number1').value);
  var num2 = parseInt(document.getElementById('number2').value);
  var result = num1 + num2;
  document.getElementById('result').value = result;
});
document.getElementById("sub").addEventListener("click",
function(){
  var num1 = parseInt(document.getElementById('number1').value);
  var num2 = parseInt(document.getElementById('number2').value);
  if(num2 > num1){
  var result = num2 - num1;
  }
  else {
    var result = num1 - num2;
  }
  document.getElementById('result').value = result;
});
document.getElementById("div").addEventListener("click",
function(){
  var num1 = parseInt(document.getElementById('number1').value);
  var num2 = parseInt(document.getElementById('number2').value);
  var result = num1 / num2;
  document.getElementById('result').value = result;
});
document.getElementById("mod").addEventListener("click",
function(){
  var num1 = parseInt(document.getElementById('number1').value);
  var num2 = parseInt(document.getElementById('number2').value);
  var result = num1 % num2;
  document.getElementById('result').value = result;
});
document.getElementById("mul").addEventListener("click",
function(){
  var num1 = parseInt(document.getElementById('number1').value);
  var num2 = parseInt(document.getElementById('number2').value);
  var result = num1 * num2;
  document.getElementById('result').value = result;
});
