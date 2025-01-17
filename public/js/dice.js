/* 
* Used to create a dice rolling section of the website. Sets up a dice in a rollButton/roll/total format.
* The outputs for all dice are cleared every time you switch what kind of die you're rolling.
* There should also definitely be an object for dice.
*/ 

//For example, 
let d4button = document.getElementById('d4button'); //Button to roll die
let d4value = document.getElementById('d4value');   //Value rolled
let d4total = document.getElementById('d4total');   //Total of all rolls consecutively made.

let d6button = document.getElementById('d6button');
let d6value = document.getElementById('d6value');
let d6total = document.getElementById('d6total');

let d8button = document.getElementById('d8button');
let d8value = document.getElementById('d8value');
let d8total = document.getElementById('d8total');

let d10button = document.getElementById('d10button');
let d10value = document.getElementById('d10value');
let d10total = document.getElementById('d10total');

let d12button = document.getElementById('d12button');
let d12value = document.getElementById('d12value');
let d12total = document.getElementById('d12total');

let d20button = document.getElementById('d20button');
let d20value = document.getElementById('d20value');
let d20total = document.getElementById('d20total');

let total;
let x;

//Listener for the D4 button click.
d4button.addEventListener('click', function(){
    //Clear all others
    d6value.textContent = 0;
    d6total.textContent = 0;
    d8value.textContent = 0;
    d8total.textContent = 0;
    d10value.textContent = 0;
    d10total.textContent = 0;
    d12value.textContent = 0;
    d12total.textContent = 0;
    d20value.textContent = 0;
    d20total.textContent = 0;

    total = parseInt(d4total.textContent);  //Read current total
    x = Math.ceil(Math.random()*4);         //Acquire random number 1-4

    // This makes the update pretty. I have a method for this somewhere, will implement.
    d4value.style.opacity = '.6'
    d4total.style.opacity = '.6'
    setTimeout(() => {
        d4value.textContent = x;    //Output value rolled
        d4total.textContent = total + x;    //Increment total
        d4value.style.opacity = '1'
        d4total.style.opacity = '1'
    }, 50);

});

//The rest of these are the same.
d6button.addEventListener('click', function(){
    d4value.textContent = 0;
    d4total.textContent = 0;
    d8value.textContent = 0;
    d8total.textContent = 0;
    d10value.textContent = 0;
    d10total.textContent = 0;
    d12value.textContent = 0;
    d12total.textContent = 0;
    d20value.textContent = 0;
    d20total.textContent = 0;

    total = parseInt(d6total.textContent);
    x = Math.ceil(Math.random()*6);
    d6value.style.opacity = '.6'
    d6total.style.opacity = '.6'
    setTimeout(() => {
        d6value.textContent = x;
        d6total.textContent = total + x;
        d6value.style.opacity = '1'
        d6total.style.opacity = '1'
    }, 50);
});

d8button.addEventListener('click', function(){
    d4value.textContent = 0;
    d4total.textContent = 0;
    d6value.textContent = 0;
    d6total.textContent = 0;
    d10value.textContent = 0;
    d10total.textContent = 0;
    d12value.textContent = 0;
    d12total.textContent = 0;
    d20value.textContent = 0;
    d20total.textContent = 0;

    total = parseInt(d8total.textContent);
    x = Math.ceil(Math.random()*8);
    d8value.style.opacity = '.6'
    d8total.style.opacity = '.6'
    setTimeout(() => {
        d8value.textContent = x;
        d8total.textContent = total + x;
        d8value.style.opacity = '1'
        d8total.style.opacity = '1'
    }, 50);
});

d10button.addEventListener('click', function(){
    d4value.textContent = 0;
    d4total.textContent = 0;
    d6value.textContent = 0;
    d6total.textContent = 0;
    d8value.textContent = 0;
    d8total.textContent = 0;
    d12value.textContent = 0;
    d12total.textContent = 0;
    d20value.textContent = 0;
    d20total.textContent = 0;

    total = parseInt(d10total.textContent);
    x = Math.ceil(Math.random()*10);
    d10value.style.opacity = '.6'
    d10total.style.opacity = '.6'
    setTimeout(() => {
        d10value.textContent = x;
        d10total.textContent = total + x;
        d10value.style.opacity = '1'
        d10total.style.opacity = '1'
    }, 50);
});

d12button.addEventListener('click', function(){
    d4value.textContent = 0;
    d4total.textContent = 0;
    d6value.textContent = 0;
    d6total.textContent = 0;
    d8value.textContent = 0;
    d8total.textContent = 0;
    d10value.textContent = 0;
    d10total.textContent = 0;
    d20value.textContent = 0;
    d20total.textContent = 0;

    total = parseInt(d12total.textContent);
    x = Math.ceil(Math.random()*12);
    d12value.style.opacity = '.6'
    d12total.style.opacity = '.6'
    setTimeout(() => {
        d12value.textContent = x;
        d12total.textContent = total + x;
        d12value.style.opacity = '1'
        d12total.style.opacity = '1'
    }, 50);
});

d20button.addEventListener('click', function(){
    d4value.textContent = 0;
    d4total.textContent = 0;
    d6value.textContent = 0;
    d6total.textContent = 0;
    d8value.textContent = 0;
    d8total.textContent = 0;
    d10value.textContent = 0;
    d10total.textContent = 0;
    d12value.textContent = 0;
    d12total.textContent = 0;

    total = parseInt(d20total.textContent);
    x = Math.ceil(Math.random()*20);
    d20value.style.opacity = '.6'
    d20total.style.opacity = '.6'
    setTimeout(() => {
        d20value.textContent = x;
        d20total.textContent = total + x;
        d20value.style.opacity = '1'
        d20total.style.opacity = '1'
    }, 50);
});