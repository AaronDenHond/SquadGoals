/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    if (hours > 17) {
        document.getElementById("target").innerHTML = "Good evening!";

    }

    else if (hours < 17) {
        document.getElementById("target").innerHTML = "Hello!";
    }

    else if (hours === 17 && minutes > 30) {
        document.getElementById("target").innerHTML = "Good evening!";
    }
    
    else {
        document.getElementById("target").innerHTML = "Hello!";
    }

})();


let number = 12

if (number > 10) {
    alert("hello");
}
else if (number === 5) {
    alert("nice");
}
else {
    alert("shut the fuck aaron");
}

console.log(number);