/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
document.getElementById("run").addEventListener("click", () => {


    let dobDay = document.getElementById("dob-day").value;
    let dobMonth = document.getElementById("dob-month").value;
    let dobYear = document.getElementById("dob-year").value;
    let doBBirthday = new Date(dobYear,dobMonth - 1,dobDay); // js uses month index
    
    let todayMilliSecs = new Date().getTime();
    let birthdayMilliSecs = doBBirthday.getTime();
    
    let ageInMilliSeconds = todayMilliSecs - birthdayMilliSecs;
    let age = Math.floor(ageInMilliSeconds/(1000 * 60 * 60 * 24 * 365))
    alert(age);
    
/* 
    alert(doBBirthday); */

    
    



    //alert(age);



});
    // your code here
  
})();
