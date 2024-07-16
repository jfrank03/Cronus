const dropdown = document.getElementById('dropdown');
const clock = document.getElementById('clock');
const amPm = document.getElementById('am_pm_box');
const datebox = document.getElementById('datebox');

let seconds = 0;
let minutes = 0;
let hours = 12;
let day = 1;
let month;

//Create a linked list class for tracking months.
class Month{
    constructor(name, next, previous, days){
        this.name = name;
        this.next = next;
        this.previous = previous;
        this.days = days;
    }
    getNext(){
        return this.next;
    }
    setNext(next){
        this.next = next;
    }
    getPrevious(){
        return this.previous;
    }
    setPrevious(prev){
        this.previous = prev;
    }
    getDays(){
        return this.days;
    }
}

//Initializes linked list of months.
function initMonths(){
    let jan = new Month('Jan', null, null, 31);
    let feb = new Month('Feb', null, jan, 28);
    jan.setNext(feb);
    let mar = new Month('Mar', null, feb, 31);
    feb.setNext(mar);
    let apr = new Month('Apr', null, mar, 30);
    mar.setNext(apr);
    let may = new Month('May', null, apr, 31);
    apr.setNext(may);
    let jun = new Month('Jun', null, may, 30);
    may.setNext(jun);
    let jul = new Month('Jul', null, jun, 31);
    jun.setNext(jul);
    let aug = new Month('Aug', null, jul, 31);
    jul.setNext(aug);
    let sep = new Month('Sep', null, aug, 31);
    aug.setNext(sep);
    let oct = new Month('Oct', null, sep, 31);
    sep.setNext(oct);
    let nov = new Month('Nov', null, oct, 30);
    oct.setNext(nov);
    let dec = new Month('Dec', jan, nov, 31);
    nov.setNext(dec);
    jan.setPrevious(dec);

    return jan;
}

const months = initMonths();
month = months;

//Pads date box numbers with a zero so that they always are two digits in length.
function padZero (value){
    return value.toString().padStart(2,'0');
}

//Used to update the clock with new values.
function updateClock(){
    clock.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

//Switches the am_pm box between am and pm.
function switchAmPm(){
    if (amPm.textContent == 'am') amPm.textContent = 'pm';
    else amPm.textContent = 'am';
}

//Updates the date box.
function updateDate(){
    datebox.textContent = `${month.name} ${day},`;
}

//Increments time based on unit and increment size.
function incTime(unit, increment){
    switch(unit){
        case 'seconds':  seconds += increment;
                            if(seconds >= 60) {
                                seconds -= 60;
                                incTime("minutes", 1);
                            }
                            break;
        case 'minutes':  minutes += increment;
                            if(minutes >= 60) {
                                minutes -= 60;
                                incTime("hours", 1);
                            }
                            break;
        case 'hours':    if(hours == 12) hours = hours + increment - 12;
                            else {
                                hours += increment;
                                if(hours >= 12){
                                if (hours > 12) hours -= 12;
                                if(amPm.textContent == 'pm') incTime('days', 1);
                                switchAmPm();
                                }
                            }
                            break;
        case 'days': day += increment;
                        if(day > month.getDays()){
                            day -= month.getDays();
                            month = month.getNext();
                        }
                        updateDate();
                        break;
    }

    updateClock();
}

//Decides based on a given preset increment which time slot to change. 
function addTime(increment){
    switch(increment){
        case 6: incTime('seconds', 6);
                break;
        case 30:incTime('minutes', 30);
                break;
        case 1: incTime('hours',1);
                break;
        case 4: incTime('hours',4);
                break;
        case 8: incTime('hours',8);
                break;
        case 24:incTime('days', 1);
                break;
    }
}

//Decrements size based on the unit and increment.
function decTime(unit,increment){
    switch(unit){
        case 'seconds':  if(seconds >= increment) seconds -= increment;
                            else {
                            seconds -= increment;
                            seconds += 60;
                            decTime('minutes', 1);
                            }
                            break;
        case 'minutes':  if(minutes >= increment) minutes -= increment;
                            else {
                            minutes -= increment;
                            minutes += 60;
                            decTime('hours', 1);
                            }
                            break;
        case 'hours':    if(hours > increment && hours != 12) hours -= increment;
                            else if(hours != 12){
                            hours -= increment;
                            hours += 12;
                            if(amPm.textContent == 'am') decTime('days', 1);
                            switchAmPm();
                            }
                            else{
                            hours -= increment;
                            if(amPm.textContent == 'am') decTime('days', 1);
                            switchAmPm();
                            }
                            break;
        case 'days': if (day > increment) day -= increment;
                        else {
                            month = month.getPrevious();
                            day = day - increment + month.getDays();
                        }
                        updateDate();
                        break;
    }

    updateClock();
}

//Decides based on a given preset increment which time slot to change. 
function subTime(increment){
    switch(increment){
        case 6: decTime('seconds', 6);
                break;
        case 30:decTime('minutes', 30);
                break;
        case 1: decTime('hours',1);
                break;
        case 4: decTime('hours',4);
                break;
        case 8: decTime('hours',8);
                break;
        case 24:decTime('days', 1);
                break;
    }
}

//Adds event listener so that the arrow keys function to change the time / increment.
document.addEventListener('keydown', function(event){
    const inc = parseInt(dropdown.value);

    switch(event.key){
        case 'ArrowRight':  addTime(inc);
                            break;
        case 'ArrowLeft':   subTime(inc);
                            break;
        case 'ArrowUp':     if(dropdown.selectedIndex > 0) dropdown.selectedIndex -= 1;
                            break;
        case 'ArrowDown':   if(dropdown.selectedIndex < 5) dropdown.selectedIndex += 1;
                            break;
    }
});