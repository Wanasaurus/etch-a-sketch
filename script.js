//Create multiple squares

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

//Change squares per side

let squares = document.querySelector("#squares");
squares.addEventListener("submit", changeGrid);

function changeGrid (event) {
    
    event.preventDefault();

    let sqPerSide = document.querySelector("#squaresPerSide").value;
    
    if (sqPerSide > 100) {
        alert("Sorry, too many squares might cause technical issues. Use 100 or less instead.");
    } else {
        alert(`You picked ${sqPerSide}`);
    }

    let remove = document.querySelector(".gridSquares");
    while (remove.firstChild) {
        remove.removeChild(remove.firstChild);
    }
    
}