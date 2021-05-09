/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
let age = prompt("What is your age?");
let gender = prompt("What is your gender?");
let town = prompt("What town do you live in?");
let confirm = alert("Are you " + age + "is your gender " + gender + " and do you live in " + town + "?");    

while (confirm !== true) {
    age;
    gender;
    town;
    confirm;
}

})();
