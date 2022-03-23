// create querySelectors to represent the areas we want to react to user input
var puzzleButtonEl = document.querySelector("#btn");
var puzzleContainerEl = document.querySelector("table");
var rowZeroCellsEl = document.querySelector("#zero");
var rowOneCellsEl = document.querySelector("#one");
var rowTwoCellsEl = document.querySelector("#two");
var rowThreeCellsEl = document.querySelector("#three");
var rowFourCellsEl = document.querySelector("#four");
var rowFiveCellsEl = document.querySelector("#five");
var rowSixCellsEl = document.querySelector("#six");
var rowSevenCellsEl = document.querySelector("#seven");
var rowEightCellsEl = document.querySelector("#eight");
var timeEl = document.querySelector("#countdown");

// future functionality for the solve button
// var solveButtonEl = document.querySelector("#btn");


// Use an empty array and add numbers dynamically with the response from the API
var userInitGrid = [];
var solvedGrid =[];


// pull a puzzle from the API
// set the value of the global array to the newly array fetched from the API
// this will happen on click of "Start"
function generatePuzzle() {
    startTimer();
    var apiUrl = "https://sugoku.herokuapp.com/board?difficulty=medium";
    fetch(apiUrl).then(function (response) {
    if (response.ok) {
    response.json().then(function (data) {
        // displayPuzzle(data, array);
        userInitGrid = data.board;
        solvedGrid = data.solved;
        generateGrid();
    });
    };
});
};

// function to dynamically add the array to the page
// loop through each array of 9 numbers
// then loop through all 9 arrays
// inside the first for loop handle the individual rows
// inside the second for loop will have the actual td content
// check whether there are remaining characters to add
// this function takes in the global array and iterates through it
// next as it iterates through it, it adds the numbers to the page
function generateGrid(count, values) {
    for (i = 0; i < userInitGrid.length; i++) {
    for (j = 0; j < userInitGrid[i].length; j++) {
    document.querySelector('tr:nth-child('+(i + 1) + ') > td:nth-child('+(j + 1) + ')').textContent = '';
    if (userInitGrid[i][j])
        document.querySelector('tr:nth-child(' + (i + 1) + ') > td:nth-child(' + (j + 1) + ')').textContent = userInitGrid[i][j];
    };
};
};

// Add function to listen for what number a user puts into a cell
// Append that number to the userInitGrid array in the right location
function addNumber() {
};

function buttonClickHandler(event) {
  // use this function to do local storage fetch
    var cellClick = event.target.getAttribute("data-cell");
    if (cell) {
    puzzle(grid);
    grid.textContent = "";
};
};

// how to handle local storage?
// save the global variable after the API pull to local storage
// page refresh will go to local storage instead of the fetch
// on initial page load, grab information from local storage, if any exists

// event listeners to call the functions when a user clicks certain areas
puzzleButtonEl.addEventListener("click", generatePuzzle);
rowZeroCellsEl.addEventListener("click", addNumber);
rowOneCellsEl.addEventListener("click", addNumber);
rowTwoCellsEl.addEventListener("click", addNumber);
rowThreeCellsEl.addEventListener("click", addNumber);
rowFourCellsEl.addEventListener("click", addNumber);
rowFiveCellsEl.addEventListener("click", addNumber);
rowSixCellsEl.addEventListener("click", addNumber);
rowSevenCellsEl.addEventListener("click", addNumber);
rowEightCellsEl.addEventListener("click", addNumber);


// once the button is clicked, start a timer
// clicking start btn 
function startTimer() {
    
var duration = moment.duration({
    'minutes': 5,
    'seconds': 00
});

var timestamp = new Date(0, 0, 0, 2, 10, 30);
var interval = 1;
var timer = setInterval(function() {
timestamp = new Date(timestamp.getTime() + interval * 1000);

duration = moment.duration(duration.asSeconds() - interval, 'seconds');
var min = duration.minutes();
var sec = duration.seconds();

sec -= 1;
if (min < 0) return clearInterval(timer);
if (min < 10 && min.length != 2) min = '0' + min;
if (sec < 0 && min != 0) {
    min -= 1;
    sec = 59;
} else if (sec < 10 && sec.length != 2) sec = '0' + sec;

timeEl.textContent= (min + ':' + sec);
if (min === 0 && sec === 0)
    clearInterval(timer);

}, 1000);
};