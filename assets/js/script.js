// add functionality to the start button to call the puzzle demensions when clicked

// call the numbers based on how many times....

// make a timer so the user only has a certain amount of time to complete the puzzle

//  end the user's turn if time runs out

var puzzleButtonEl = document.querySelector("#btn");
var puzzleContainerEl = document.querySelector("table");

// establish the baseline grid for the numbers
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
var puzzleGenerate = function() {
    apiUrl = "https://sugoku.herokuapp.com/board?difficulty=medium";
    return;
};

function buttonClickHandler(event) {
    var cellClick = event.target.getAttribute("data-cell");
    // console.log(cell);
    if (cell) {
    puzzle(grid);

    grid.textContent = "";
    }
};

puzzleButtonEl.addEventListener("click", generateGrid);