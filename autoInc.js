let intervalId = null;
let increment;
let interval;
let interval_ms;

document.getElementById('toggleBox').addEventListener('change', function(event){
    if((document.getElementById('toggleIncrement').value != '') && (document.getElementById('toggleTimer').value != '')){
        increment = parseInt(document.getElementById('toggleIncrement').value);
        interval  = parseInt(document.getElementById('toggleTimer').value);
        interval_ms = interval*60000;

        if(event.target.checked) {
            intervalId = setInterval(() => {
                incTime('minutes', increment);
            }, interval_ms);
        }
        else {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
    else event.target.checked = false;   
});

document.getElementById('toggleIncrement').addEventListener('change', function(){
    increment = parseInt(document.getElementById('toggleIncrement').value);
});

document.getElementById('toggleTimer').addEventListener('change', function(){
    interval  = parseInt(document.getElementById('toggleTimer').value);
});