
// One square
let square = document.createElement("div");
document.querySelector(".gridSquares").appendChild(square);
square.classList.add("smallSquare"); 

//Create more squares

function loop(number) {
    for (let i = 1; i <= number; i++) {
        square = document.createElement("div");
        document.querySelector(".gridSquares").appendChild(square);
        square.classList.add("smallSquare"); 
}
}   

loop(6);

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

