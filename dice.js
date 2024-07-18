let d4button = document.getElementById('d4button');
let d4value = document.getElementById('d4value');
let d4total = document.getElementById('d4total');

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

d4button.addEventListener('click', function(){
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

    total = parseInt(d4total.textContent);
    x = Math.ceil(Math.random()*4);
    d4value.textContent = x;
    d4total.textContent = total + x;
});

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
    d6value.textContent = x;
    d6total.textContent = total + x;
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
    d8value.textContent = x;
    d8total.textContent = total + x;
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
    d10value.textContent = x;
    d10total.textContent = total + x;
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
    d12value.textContent = x;
    d12total.textContent = total + x;
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
    d20value.textContent = x;
    d20total.textContent = total + x;
});