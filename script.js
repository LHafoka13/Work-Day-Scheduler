//2. create time blocks for standard business hours
    //2.1 time blocks are color coded:
    //gray - past 
    //red - present
    //green - future
    //2.2 create save buttons for the time block

    //2.2 time block can hold input
//3. when save button is clicked, input within the time block is saved in local storage
//4. when events are saved, they persist even after being refreshed

//Display current date on the page
var todaysDate = document.getElementById("currentDay");
todaysDate.textContent = moment().format('MMMM Do YYYY');
var timeDisplay = document.getElementById("displayTime");
var userInput

//Time slots for schedule

var workDay = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM",];

//Time blocks

// for (var i = 0; i < workDay.length; i++) {
//     var displayTime = document.createElement("p");
//     displayTime.textContent = workDay[i];
//     timeDisplay.appendChild(displayTime);
// }

// for (var i = 0; i < workDay.length; i++) {
//     userInput = input type="text"
// }




