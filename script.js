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

createGrid(32);