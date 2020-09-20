function multiplicationResult() {
    let a = document.querySelector("div#number1 input").value;
    let b = document.querySelector("div#number2 input").value;
    let math
    let operator = document.querySelector("select#operators").value
    switch (operator) {
     case "addition":
       math = parseInt(a) + parseInt(b);
       break;
     case "subtraction":
       math = parseInt(a) - parseInt(b);
       break;
     case "division":
       math = parseInt(a) / parseInt(b);
       break;
     case "multiplication":
       math = parseInt(a) * parseInt(b);
       break;
     } 
       
    document.querySelector("span").innerHTML = math;
   }
   