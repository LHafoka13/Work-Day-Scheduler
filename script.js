//Display current date on the page
var todaysDate = document.getElementById("currentDay");
todaysDate.textContent = moment().format('MMMM Do YYYY');

//stores current time variable 
var currentTime= moment().format('h:mm:ss a')


//stores the button and text area for the 8AM in global variables
var eightbtn = document.getElementById("btn8")
var userInput8 = document.getElementById("task8")
//adds an event listener to the save btn that when clicked it creates a variable called eightAM and stores the user input in the variable
eightbtn.addEventListener("click", function(event) {
    console.log(event)
    var eightAM = userInput8.value
    console.log(eightAM)
    //stores user input in local storage
    localStorage.setItem("task8", eightAM) 
})

//grabs the user input from local storage and displays it to the element. It persists when refreshed
userInput8.innerHTML = localStorage.getItem("task8")

//repeats the above process for each time slot below

var nineBtn = document.getElementById("btn9")
var userInput9 = document.getElementById("task9")
nineBtn.addEventListener("click", function(event) {
    console.log(event)
    var nineAM = userInput9.value
    console.log(nineAM)
    localStorage.setItem("task9", nineAM) 
})

userInput9.innerHTML = localStorage.getItem("task9")

var tenBtn = document.getElementById("btn10")
var userInput10 = document.getElementById("task10")
tenBtn.addEventListener("click", function(event) {
    console.log(event)
    var tenAM = userInput10.value
    console.log(tenAM)
    localStorage.setItem("task10", tenAM) 
})

userInput10.innerHTML = localStorage.getItem("task10")

var elevenBtn = document.getElementById("btn11")
var userInput11 = document.getElementById("task11")
elevenBtn.addEventListener("click", function(event) {
    console.log(event)
    var elevenAM = userInput11.value
    console.log(elevenAM)
    localStorage.setItem("task11", elevenAM)
})

 userInput11.innerHTML = localStorage.getItem("task11")

var twelveBtn = document.getElementById("btn12")
var userInput12 = document.getElementById("task12")
twelveBtn.addEventListener("click", function(event) {
    console.log(event)
    var twelvePM = userInput12.value
    console.log(twelvePM)
    localStorage.setItem("task12", twelvePM) 
})

    userInput12.innerHTML = localStorage.getItem("task12")

var thirteenBtn = document.getElementById("btn13")
var userInput13 = document.getElementById("task13")
thirteenBtn.addEventListener("click", function(event) {
    console.log(event)
    var onePM = userInput13.value
    console.log(onePM)
    localStorage.setItem("task13", onePM) 
})

  userInput13.innerHTML = localStorage.getItem("task13")

var fourteenBtn = document.getElementById("btn14")
var userInput14 = document.getElementById("task14")
fourteenBtn.addEventListener("click", function(event) {
    console.log(event)
    var twoPM = userInput14.value
    console.log(twoPM)
    localStorage.setItem("task14", twoPM) 
})

 userInput14.innerHTML = localStorage.getItem("task14")

var fifteenBtn = document.getElementById("btn15")
var userInput15 = document.getElementById("task15")
fifteenBtn.addEventListener("click", function(event) {
    console.log(event)
    var threePM = userInput15.value
    console.log(threePM)
    localStorage.setItem("task15", threePM) 
})

userInput15.innerHTML = localStorage.getItem("task15")

var sixteenBtn = document.getElementById("btn16")
var userInput16 = document.getElementById("task16")
sixteenBtn.addEventListener("click", function(event) {
    console.log(event)
    var fourPM  = userInput16.value
    console.log(fourPM)
    localStorage.setItem("task16", fourPM)
})

userInput16.innerHTML = localStorage.getItem("task16")

var seventeenBtn = document.getElementById("btn17")
var userInput17 = document.getElementById("task17")
seventeenBtn.addEventListener("click", function(event) {
    console.log(event)
    var fivePM = userInput17.value
    console.log(fivePM)
    localStorage.setItem("task17", fivePM) 
})

  userInput17.innerHTML = localStorage.getItem("task17")

// stores the time slots into global variables

var eightHour = document.getElementById("task8")
var nineHour = document.getElementById("task9")
var tenHour = document.getElementById("task10")
var eleventHour = document.getElementById("task11")
var twelveHour = document.getElementById("task12")
var oneHour = document.getElementById("task13")
var twoHour = document.getElementById("task14")
var threeHour = document.getElementById("task15")
var fourHour = document.getElementById("task16")
var fiveHour = document.getElementById("task17")

//Color coded time blocks based on time of day
if (eightHour > currentTime) 
{
    eightHour.classList.add('past')
} else if (eightHour == currentTime) {
    eightHour.classList.add('present')
} else if (eightHour < currentTime) {
    eightHour.classList.add('future')
};


if (nineHour > currentTime) 
{
    nineHour.classList.add('past')
} else if (nineHour == currentTime) {
    nineHour.classList.add('present')
} else if (nineHour < currentTime) {
    nineHour.classList.add('future')
};


if (tenHour > currentTime) 
{
    tenHour.classList.add('past')
} else if (tenHour == currentTime) {
    tenHour.classList.add('present')
} else if (tenHour < currentTime) {
    tenHour.classList.add('future')
};

if (eleventHour > currentTime) 
{
    eleventHour.classList.add('past')
} else if (eleventHour == currentTime) {
    eleventHour.classList.add('present')
} else if (eleventHour < currentTime) {
    eleventHour.classList.add('future')
};

if (twelveHour > currentTime) 
{
    twelveHour.classList.add('past')
} else if (twelveHour == currentTime) {
    twelveHour.classList.add('present')
} else if (twelveHour < currentTime) {
    twelveHour.classList.add('future')
};

if (oneHour > currentTime) 
{
    oneHour.classList.add('past')
} else if (oneHour == currentTime) {
    oneHour.classList.add('present')
} else if (oneHour < currentTime) {
    oneHour.classList.add('future')
};

if (twoHour > currentTime) 
{
    twoHour.classList.add('past')
} else if (twoHour == currentTime) {
    twoHour.classList.add('present')
} else if (twoHour < currentTime) {
    twoHour.classList.add('future')
};

if (threeHour > currentTime) 
{
    threeHour.classList.add('past')
} else if (threeHour == currentTime) {
    threeHour.classList.add('present')
} else if (threeHour < currentTime) {
    threeHour.classList.add('future')
};

if (fourHour > currentTime) 
{
    fourHour.classList.add('past')
} else if (fourHour == currentTime) {
    fourHour.classList.add('present')
} else if (fourHour < currentTime) {
    fourHour.classList.add('future')
};

if (fiveHour > currentTime) 
{
    fiveHour.classList.add('past')
} else if (fiveHour == currentTime) {
    fiveHour.classList.add('present')
} else if (fiveHour < currentTime) {
    fiveHour.classList.add('future')
};