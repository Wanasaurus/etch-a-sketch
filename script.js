// Create the default 16 squares

function createGrid (number) {
    
    for (let outer = 1; outer <= number; outer++) {

        for (let inner = 1; inner <= number; inner++) {

            // Create one square

            let square = document.createElement("div");
            document.querySelector(".gridSquares").appendChild(square);
            square.classList.add("smallSquare"); 
        
        }
        
    }

}   


createGrid(16);

// Change squares per side without resizing the grid

let squares = document.querySelector("#squares");
squares.addEventListener("submit", changeGrid);

function changeGrid (event) {
    
    event.preventDefault();

    // Grid cannot hold more than 100 x 100 squares

    let sqPerSide = document.querySelector("#squaresPerSide").value;
    
    if (sqPerSide > 100) {

        return alert("Sorry, too many squares might cause technical issues. Use 100 or less instead.");
        
    }

    // Remove the default grid 

    let clear = document.querySelector(".gridSquares");
        
    while (clear.firstChild) {

        clear.removeChild(clear.firstChild);

    }

    // Generate new squares within the grid without resizing grid

    const containerSize = 32;

    const numRows = sqPerSide;

    const sqSize = containerSize / numRows;
        
    for (let row = 1; row <= sqPerSide; row++) {

        for (let column = 1; column <= sqPerSide; column++) {
           
            let columnSquare = document.createElement("div");
            document.querySelector(".gridSquares").appendChild(columnSquare);
            columnSquare.classList.add("newSquare"); 
            columnSquare.style.width = `${sqSize}rem`;
            columnSquare.style.height = `${sqSize}rem`;
        }
        
        }
        
    }

    // Clean Grid

    let startAnew = document.querySelector("#cleanGrid");
    startAnew.addEventListener("click", () => {

        let clear = document.querySelector(".gridSquares");
        
        while (clear.firstChild) {

        clear.removeChild(clear.firstChild);

        }

        }
    
    );


    // How to pick different colour: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color

    // Mouse events + how to draw on a canvas with a mouse: https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event#examples 