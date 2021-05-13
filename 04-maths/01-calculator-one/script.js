/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("addition").addEventListener("click", () => {
        let num1 = document.getElementById("op-one").value;
        let num2 = document.getElementById("op-two").value;
        // nums declaren in click function, want we willen pas value on click, niet page load
        alert(+num1+ + num2 );
    });
    document.getElementById("substraction").addEventListener("click", () => {
        let num1 = document.getElementById("op-one").value;
        let num2 = document.getElementById("op-two").value;
        alert(num1 - num2);
    });
    document.getElementById("multiplication").addEventListener("click", () => {
        let num1 = document.getElementById("op-one").value;
        let num2 = document.getElementById("op-two").value;
        alert(num1 * num2);
    });
    document.getElementById("division").addEventListener("click", () => {
        let num1 = document.getElementById("op-one").value;
        let num2 = document.getElementById("op-two").value;
        alert(num1 / num2);
    });


})();