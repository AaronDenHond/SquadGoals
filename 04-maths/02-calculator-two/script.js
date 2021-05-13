/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    
    
    var performOperation = function (operator) {
        let num1 = document.getElementById("op-one").value;
    let num2 = document.getElementById("op-two").value;
  
    switch (operator) {
     case "addition":
     
      alert(+num1+ + num2);
      break;
     case "substraction" :
     
       alert(num1 - num2);
       break;
     case "multiplication":
       alert(num1 * num2);
       break;
      case "division" :
        alert(num1 / num2);      
    }
};     
        
        Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
            $btn.addEventListener("click", function () {
                performOperation($btn.id);


            });
        });
    }) ();