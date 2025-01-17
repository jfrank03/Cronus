/* 
* Manages a toggle switch and an input field. When toggled on, the program will
* increment the time automatically by x in-game minutes every 1 real-world minute, where
* x is the number in the input field.
*/ 

//This is the interval, which will be created and execute every interval_ms milliseconds (Currently 1 minute).
let intervalId = null; 
let interval_ms = 60000;    //Time interval between increments in ms. Currently 1 minute real-world.
const incrementInput = document.getElementById('toggleIncrement'); //Field to read the increment from.
let increment;  //Size of in-game time increment, as input by the user.

//Listen for a change in the input field.
incrementInput.addEventListener('change', function(){
    //If there is a value input, 
    if(incrementInput.value != ''){
        increment = parseInt(incrementInput.value);
        //Reset/create the interval with new increment.
        intervalId = setInterval(() => {
            //Calls increment from Clock.
            incTime('minutes', increment);  //I should make a Clock object. 
        }, interval_ms);
    }  
    // If the input field is empty, remove the interval. That way, it stops incrementing.
    else {
        clearInterval(intervalId);
        intervalId = null;
    }
});

//Listen for change in increment input.
document.getElementById('toggleIncrement').addEventListener('change', function(){
    increment = parseInt(document.getElementById('toggleIncrement').value);
});