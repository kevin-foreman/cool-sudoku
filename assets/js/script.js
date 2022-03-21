// add functionality to the start button to call the puzzle demensions when clicked

// call the numbers based on how many times....

// make a timer so the user only has a certain amount of time to complete the puzzle

//  end the user's turn if time runs out

// notes for class: Need to add moment to the html
// need to remove one of the "this is easy..."
// Bulma has it's own button styling, so we need to figure out which style of button we want so we can add that to the html as well
// looking through jQuery documentation for a grid style layout to generate dynamically
// formatting api URL from noon today

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
    var apiUrl = "https://sugoku.herokuapp.com/board?difficulty=medium";
    
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