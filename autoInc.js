let intervalId = null;
const incrementInput = document.getElementById('toggleIncrement');
let increment;
let interval_ms = 60000;

incrementInput.addEventListener('change', function(){
    if(incrementInput.value != ''){
        increment = parseInt(incrementInput.value);
        intervalId = setInterval(() => {
            incTime('minutes', increment);
        }, interval_ms);
    }  
    else {
        clearInterval(intervalId);
        intervalId = null;
    }
});

document.getElementById('toggleIncrement').addEventListener('change', function(){
    increment = parseInt(document.getElementById('toggleIncrement').value);
});

document.getElementById('toggleTimer').addEventListener('change', function(){
    interval  = parseInt(document.getElementById('toggleTimer').value);
});