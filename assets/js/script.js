// add functionality to the start button to call the puzzle demensions when clicked

// call the numbers based on how many times....

// make a timer so the user only has a certain amount of time to complete the puzzle

//  end the user's turn if time runs out

// notes for class: Need to add moment to the html
// need to remove one of the "this is easy..."
// Bulma has it's own button styling, so we need to figure out which style of button we want so we can add that to the html as well
// looking through jQuery documentation for a grid style layout to generate dynamically
// formatting api URL from noon today
// One option for generating the puzzle could be starting with the same puzzle hints and just shuffle them around each time the user restarts
// add data-cell="1" ,, data-cell="2" ,, data-cell="3" etc... to html???
// trim the html down to just 9 columns and nine rows and use JS to dynamically add the content from the API call

var puzzleButtonEl = document.querySelector("#btn");
var puzzleContainerEl = document.querySelector("table");

// establish the baseline grid for the numbers

// // using an array of pre-defined numbers and shuffle them around
// var startingPuzzle = [
//     [5, 3, 0, 0, 7, 0, 0, 0, 0,],
//     [0, 0, 0, 0, 8, 0, 0, 7, 9,],
//     [6, 0, 0, 1, 9, 5, 0, 0, 0,],
//     [0, 0, 0, 4, 1, 9, 0, 0, 5,],
//     [0, 9, 8, 0, 0, 0, 0, 6, 0,],
//     [0, 6, 0, 0, 0, 0, 2, 8, 0,],
//     [8, 0, 0, 0, 6, 0, 0, 0, 3,],
//     [7, 0, 0, 0, 2, 0, 0, 0, 6,],
//     [4, 0, 0, 8, 0, 3, 0, 0, 1,]
// ];

// // shuffle the order of the numbers
// function shufflePuzzle(array) {
//     var puzzleIndex = startingPuzzle.length, randomIndex;
//     while (puzzleIndex != 0) {
//         randomIndex = Math.floor(Math.random() * puzzleIndex);
//         puzzleIndex--;
//         [array[puzzleIndex], array[randomIndex]] = [
//             array[randomIndex], array[puzzleIndex]
//         ];
        
//     };
// };
//         shufflePuzzle(startingPuzzle);
//         console.log(startingPuzzle);
    

// Test using an empty grid and add numbers dynamically
var userInitGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,]
]

// function to dynamically generate number fields
function generateGrid(count, values) {
    console.log("click")
    for (i = 0; i < userInitGrid.length; i++) {
    for (j = 0; j < userInitGrid[i].length; j++) {
        console.log(userInitGrid[i][j]);
    }
    }
}


// pull a puzzle from the API and print to page
function puzzleGenerate() {
    var apiUrl = "https://sugoku.herokuapp.com/board?difficulty=medium";
    fetch(apiUrl).then(function(response) {
        console.log(response);
    if (response.ok) {
        response.json().then(function(data) {
        displayPuzzle(data, array)    
        })
    }
    })
    
};
puzzleGenerate();


function buttonClickHandler(event) {
    var cellClick = event.target.getAttribute("data-cell");
    // console.log(cell);
    if (cell) {
    puzzle(grid);

    grid.textContent = "";
    }
};

puzzleButtonEl.addEventListener("click", generateGrid);