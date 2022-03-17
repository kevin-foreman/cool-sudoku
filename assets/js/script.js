// add functionality to the start button to call the puzzle demensions when clicked

// call the numbers based on how many times....

// make a timer so the user only has a certain amount of time to complete the puzzle

//  end the user's turn if time runs out

var puzzleButtonEl = document.querySelector("#start")

var userInitGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0,]
    [0, 0, 0, 0, 0, 0, 0, 0, 0,]
    [0, 0, 0, 0, 0, 0, 0, 0, 0,]
    [0, 0, 0, 0, 0, 0, 0, 0, 0,]
    [0, 0, 0, 0, 0, 0, 0, 0, 0,]
    [0, 0, 0, 0, 0, 0, 0, 0, 0,]
    [0, 0, 0, 0, 0, 0, 0, 0, 0,]
    [0, 0, 0, 0, 0, 0, 0, 0, 0,]
    [0, 0, 0, 0, 0, 0, 0, 0, 0,]
]

// function to dynamically generate 
function generateGrid(count, values) {
    for (i = 0; i <userInitGrid.length; i++) {

    }
}

var puzzleGenerate = function() {
    apiUrl = "https://sugoku.herokuapp.com/board?difficulty=medium";
    return;
};



