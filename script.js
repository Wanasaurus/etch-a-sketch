
// One square
let square = document.createElement("div");
document.querySelector(".gridSquares").appendChild(square);
square.classList.add("smallSquare"); 

//Create more squares

function createGrid (number) {
    
    for (let outer = 1; outer <= number; outer++) {

        for (let inner = 1; inner <= number; inner++) {

            square = document.createElement("div");
            document.querySelector(".gridSquares").appendChild(square);
            square.classList.add("smallSquare"); 
        
        }
        
    }

}   


createGrid(6);

//Make a square
// function grid(side) {
//     return side * side;
// }

// //Loop numbers
// function loop(number) {
//     for (let i = 1; i <= number; i++) {
//         console.log(i + " " + "square");
// }
// } 

