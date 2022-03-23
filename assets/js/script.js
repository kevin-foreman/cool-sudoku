// add functionality to the start button to call the puzzle demensions when clicked

// call the numbers based on how many times....

// make a timer so the user only has a certain amount of time to complete the puzzle

//  end the user's turn if time runs out

// add data-cell="1" ,, data-cell="2" ,, data-cell="3" etc... to html???
// trim the html down to just 9 columns and nine rows and use JS to dynamically add the content from the API call
// if we go with hard coded cells (which is fine) consider adding "contenteditable="true" so the user can input text
// would just have to add some kind of listener to capture what they enter

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
// var solveButtonEl = document.querySelector("#btn");

// establish the baseline grid for the numbers

// Use an empty array and add numbers dynamically with the response from the API
var userInitGrid = [];
var solvedGrid =[];


// pull a puzzle from the API
// set the value of the global userInitGrid array to the newly pulled array
// this will happen on click of "Start"
// conditional to ... 
function generatePuzzle() {
    var apiUrl = "https://sugoku.herokuapp.com/board?difficulty=medium";
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
        response.json().then(function (data) {
            // displayPuzzle(data, array);
        userInitGrid = data.board;
        solvedGrid = data.solved;
        generateGrid();
    
            console.log(userInitGrid);
        });
        }
        // generatePuzzle();
    });
    };

// function to dynamically generate number fields


// loop through each array of 9 numbers
// then loop through all 9 arrays
// inside the first for loop handle the individual rows
// inside the second for loop will have the actual td content
// check

function generateGrid(count, values) {
// console.log("click");
for (i = 0; i < userInitGrid.length; i++) {
    for (j = 0; j < userInitGrid[i].length; j++) {
    console.log(userInitGrid[i][j]);
    document.querySelector('tr:nth-child('+(i + 1) + ') > td:nth-child('+(j + 1) + ')').textContent = '';
    if (userInitGrid[i][j])
        document.querySelector('tr:nth-child(' + (i + 1) + ') > td:nth-child(' + (j + 1) + ')').textContent = userInitGrid[i][j];
    };
};
};


// function to display the puzzle to the grid
function displayPuzzle(grid, data) {
    if (userInitGrid.length === 0) {
        puzzleContainerEl.textContent = "No puzzle found.";

    };
    function puzzlePush() {
        userInitGrid.push
    } 
    // console.log(tr, td);
};

// Add function to listen for what number a user puts into a cell
// Append that number to the userInitGrid array in the right location
function addNumber() {
  // console.log("You clicked a cell!");
};

function buttonClickHandler(event) {
    // use this function to do local storage fetch
  var cellClick = event.target.getAttribute("data-cell");
  // console.log(cell);
  if (cell) {
    puzzle(grid);

    grid.textContent = "";
  };
};

// how to handle local storage
// save the matrix to a global variable
// refresh will go to local storage instead of the fetch
// on initial page load, grab information from local storage

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
// clicking start timer 

function gameTimer() {
    moment();
};
