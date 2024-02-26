document.addEventListener("DOMContentLoaded", () => {
    drawingArea = document.querySelector(".Container");
    fillContainer()
    console.log(drawingArea.offsetHeight + "px")
    
  });

  let gridSize = 16

  function fillContainer() {
    let elementSize = ((drawingArea.offsetHeight - 2) / gridSize) + "px"
    for (let index = 0; index < gridSize ** 2; index++) {
        const box = document.createElement('div');
        box.className = "box";
        box.style.width = elementSize;
        box.style.height = elementSize;
        box.addEventListener("mouseenter", (event) => {event.target.style.backgroundColor = '#000'})
        drawingArea.append(box);
    };
 }

 function resetContainer() {
    drawingArea.innerHTML = "";
    let elementSize = ((drawingArea.offsetHeight - 2) / gridSize) + "px"
    fillContainer();
 }

 function getSize() {
    gridSize = parseInt(prompt("Please give a number between 1 and 100"))
    while (gridSize > 100 || gridSize < 1 || isNaN(gridSize)){
        gridSize = prompt("Please give a number between 1 and 100")
    }
    resetContainer()
 }