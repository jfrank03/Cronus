/*
Creates the Clock section of the website. This is an important feature;
it allows the dm to easily keep track of time. It begins with the current
time of day/date, and then the dm uses up/down arrow keys to select
their time increment and the forware/back arrow keys to add/subtract that amount.
*/ 

const dropdown = document.getElementById("dropdown"); //Dropdown of increment options
const clock = document.getElementById("clock");     //Clock object ex. 00:00:00 
const amPm = document.getElementById("am_pm_box");  //Box saying "am" or "pm"
const datebox = document.getElementById("datebox"); //Box saying date
//Box saying volatility- used for how often the weather changes automatically.
const volatility = document.getElementById("volatilityBox"); 
let timeSinceWeatherUpdate = 0; //Also used for volatility.

//Initialize current time values
let now = new Date(); 
let seconds = now.getSeconds();
let minutes = now.getMinutes();
let hours = now.getHours();
let day = now.getDate();
let month = now.getMonth() + 1;

//Create a linked list class for tracking months. This should be in a separate file.
class Month {
  constructor(name, next, previous, days) {
    this.name = name;
    this.next = next;
    this.previous = previous;
    this.days = days;
  }
  getNext() {
    return this.next;
  }
  setNext(next) {
    this.next = next;
  }
  getPrevious() {
    return this.previous;
  }
  setPrevious(prev) {
    this.previous = prev;
  }
  getDays() {
    return this.days;
  }
}

//Initializes linked list of months.
function initMonths() {
  let jan = new Month("Jan", null, null, 31);
  let feb = new Month("Feb", null, jan, 28);
  jan.setNext(feb);
  let mar = new Month("Mar", null, feb, 31);
  feb.setNext(mar);
  let apr = new Month("Apr", null, mar, 30);
  mar.setNext(apr);
  let may = new Month("May", null, apr, 31);
  apr.setNext(may);
  let jun = new Month("Jun", null, may, 30);
  may.setNext(jun);
  let jul = new Month("Jul", null, jun, 31);
  jun.setNext(jul);
  let aug = new Month("Aug", null, jul, 31);
  jul.setNext(aug);
  let sep = new Month("Sep", null, aug, 31);
  aug.setNext(sep);
  let oct = new Month("Oct", null, sep, 31);
  sep.setNext(oct);
  let nov = new Month("Nov", null, oct, 30);
  oct.setNext(nov);
  let dec = new Month("Dec", jan, nov, 31);
  nov.setNext(dec);
  jan.setPrevious(dec);

  return jan;
}

const months = initMonths();
month = months;

//Pads date box numbers with a zero so that they always are two digits in length.
function padZero(value) {
  return value.toString().padStart(2, "0");
}

//Used to update the clock with new values.
function updateClock() {
  //Replace with updateWithFade
  clock.style.opacity = ".6";

  setTimeout(() => {
    clock.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )}`;
    clock.style.opacity = "1";
  }, 50);
}

//Switches the am_pm box between am and pm.
function switchAmPm() {
  //Replace with updateWithFade
  amPm.style.opacity = "0.6";

  setTimeout(() => {
    if (amPm.textContent == "am") amPm.textContent = "pm";
    else amPm.textContent = "am";
    amPm.style.opacity = "1";
  }, 50);
}

//Updates the date box.
function updateDate() {
  //Replace with updateWithFade
  datebox.style.opacity = "0.6";
  setTimeout(() => {
    datebox.textContent = `${month.name} ${day},`;
    datebox.style.opacity = "1";
  }, 50);
}

//Increments time based on unit and increment size.
function incTime(unit, increment) {
  switch (unit) {
    case "seconds":
      seconds += increment;
      //If there's more than 60 seconds, make one a minute.
      if (seconds >= 60) {
        seconds -= 60;
        incTime("minutes", 1);
      }
      break;
    case "minutes":
      minutes += increment;
      //If there's more than 60 minutes, make one an hour. This should be a while.
      if (minutes >= 60) {
        minutes -= 60;
        incTime("hours", 1);
      }
      break;
    case "hours":
      //If/else seems redundant, I'm gonna look at it later. I know there was a reason I did it.
      if (hours == 12) hours = increment;
      else {
        hours += increment;
        if (hours >= 12) {
          if (hours > 12) hours -= 12;
          if (amPm.textContent == "pm") incTime("days", 1);
          switchAmPm();
        }
      }

      //If there's a volatility value input, 
      if (volatility.value != "") {
        //Increment the hours since there was a change in weather
        timeSinceWeatherUpdate += increment;
        //And if that time surpasses the volatility, 
        if (timeSinceWeatherUpdate >= parseInt(volatility.value)) {
          //generate new weather conditions and reset the timer.
          snowyMountains.generateWeather();
          timeSinceWeatherUpdate =
            timeSinceWeatherUpdate % parseInt(volatility.value);
        }
      }
      break;
    case "days":
      day += increment;
      if (day > month.getDays()) {
        day -= month.getDays();
        month = month.getNext();
      }
      updateDate();
      break;
  }

  updateClock();
}

//Decides based on a given preset increment which time slot to change.
function addTime(increment) {
  switch (increment) {
    case 6:
      incTime("seconds", 6);
      break;
    case 30:
      incTime("minutes", 30);
      break;
    case 1:
      incTime("hours", 1);
      break;
    case 4:
      incTime("hours", 4);
      break;
    case 8:
      incTime("hours", 8);
      break;
    case 24:
      incTime("days", 1);
      break;
  }
}

//Decrements size based on the unit and increment.
function decTime(unit, increment) {
  switch (unit) {
    case "seconds":
      if (seconds >= increment) seconds -= increment;
      else {
        seconds -= increment;
        seconds += 60;
        decTime("minutes", 1);
      }
      break;
    case "minutes":
      if (minutes >= increment) minutes -= increment;
      else {
        minutes -= increment;
        minutes += 60;
        decTime("hours", 1);
      }
      break;
    case "hours":
      if (hours > increment && hours != 12) hours -= increment;
      else if (hours != 12) {
        hours -= increment;
        hours += 12;
        if (amPm.textContent == "am") decTime("days", 1);
        switchAmPm();
      } else {
        hours -= increment;
        if (amPm.textContent == "am") decTime("days", 1);
        switchAmPm();
      }
      break;
    case "days":
      if (day > increment) day -= increment;
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
function subTime(increment) {
  switch (increment) {
    case 6:
      decTime("seconds", 6);
      break;
    case 30:
      decTime("minutes", 30);
      break;
    case 1:
      decTime("hours", 1);
      break;
    case 4:
      decTime("hours", 4);
      break;
    case 8:
      decTime("hours", 8);
      break;
    case 24:
      decTime("days", 1);
      break;
  }
}

//Adds event listener so that the arrow keys function to change the time / increment.
document.addEventListener("keydown", function (event) {
  const inc = parseInt(dropdown.value);

  switch (event.key) {
    case "ArrowRight":
      addTime(inc);
      updateUpdateBox("Right arrow pressed"); //Testing update box.
      break;
    case "ArrowLeft":
      subTime(inc);
      break;
    case "ArrowUp":
      if (dropdown.selectedIndex > 0) dropdown.selectedIndex -= 1;
      break;
    case "ArrowDown":
      if (dropdown.selectedIndex < 5) dropdown.selectedIndex += 1;
      break;
  }
});
