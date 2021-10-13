const body = document.querySelector('body');
const grid = document.createElement('div');
grid.id = "grid";
body.appendChild(grid);

start();
function start(){
    createGrid();
}

//Fill the grid
function createGrid(){
    for(var i = 0; i < 256; i++){
        const cell = document.createElement('div');
        cell.id = "grid-cell";

        cell.addEventListener("mouseover", function(){
            cell.style.backgroundColor = "red";
        })
        grid.append(cell);
    }
}


function clearGrid(){
    while(grid.lastChild){
        grid.removeChild(grid.lastChild);
    }
    start();
}




