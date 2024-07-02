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
squares.addEventListener("click", () => {

    alert("Ray day");

}
);