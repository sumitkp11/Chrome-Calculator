function add(){
      var num1 = parseInt(document.getElementById('number1').value);
      var num2 = parseInt(document.getElementById('number2').value);
      var result = num1 + num2;
      document.getElementById('result').value = result;
    }
    function sub(){
      
    }
    function mul(){
      var num1 = parseInt(document.getElementById('number1').value);
      var num2 = parseInt(document.getElementById('number2').value);
      var result = num1 * num2;
      document.getElementById('result').value = result;
    }
    function divide(){
      var num1 = parseInt(document.getElementById('number1').value);
      var num2 = parseInt(document.getElementById('number2').value);
      var result = num1 / num2;
      document.getElementById('result').value = result;
    }
    function clr(){
      document.getElementById('number1').value = '';
      document.getElementById('number2').value = '';
      document.getElementById('result').value = '';
    }
