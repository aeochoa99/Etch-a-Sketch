const smallBtn = document.querySelector(".small");

const mediumBtn = document.querySelector(".medium");

const largeBtn = document.querySelector(".large");

const resetBtn = document.querySelector(".reset");

const grid = document.querySelector(".grid");

const eraseBtn = document.querySelector(".erase");

let eraseMode = false;

function createGrid(size) {
    let cellSize = 100 / size + "%";

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.className = "cell"
        cell.style.flex = `0 0 ${cellSize}`;
        cell.style.height = cellSize;
        grid.appendChild(cell);
        cell.addEventListener("click", function () {
            if (eraseMode === true) {
                cell.style.backgroundColor = "";
            } else {
                cell.style.backgroundColor = "rgb(100, 100, 100)";
            }
        });
    }
}

createGrid(16);

smallBtn.addEventListener("click", function() {
    grid.innerHTML = "";
    createGrid(16);
});

mediumBtn.addEventListener("click", function() {
    grid.innerHTML = "";
    createGrid(32);
});

largeBtn.addEventListener("click", function() {
    grid.innerHTML = "";
    createGrid(64);
});

resetBtn.addEventListener("click", function() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(function(cell) {
        cell.style.backgroundColor = "rgb(192, 192, 192)";
    });
});

eraseBtn.addEventListener("click", function() {
    eraseMode = !eraseMode;
})