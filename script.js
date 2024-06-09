const smallBtn = document.querySelector(".small");

const mediumBtn = document.querySelector(".medium");

const largeBtn = document.querySelector(".large");

const resetBtn = document.querySelector(".reset");

const grid = document.querySelector(".grid");

const cell = document.querySelector(".cell");

function createGrid(size) {
    let cellSize = 100 / size + "%";

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.className = "cell"
        cell.style.flex = `0 0 ${cellSize}`;
        cell.style.height = cellSize;
        grid.appendChild(cell);
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