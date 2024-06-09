const smallBtn = document.querySelector(".small");

const mediumBtn = document.querySelector(".medium");

const largeBtn = document.querySelector(".large");

const resetBtn = document.querySelector("reset");

function createGrid(size) {
    let grid = document.querySelector(".grid");

    let cellSize = 100 / size + "%";

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.style.flex = `0 0 ${cellSize}`;
        cell.style.height = cellSize;
        grid.appendChild(cell);
    }
}