
function createGrid(x) { 

    for(var i = 0; i < x*x; i++) {
        var square = $('<div class="contain"></div>');
        $("#container").append(square);
    }

document.querySelectorAll('.contain').forEach(square => {
    square.style.width = `${500/x}px`;
    square.style.height = `${500/x}px`;
});
}
$(document).ready(function() {
    createGrid(16);
    $(".contain").mouseover(function() {
        $(this).css("background-color", "red");
    });
});

function clearGrid() {
  $(".contain").css("background-color", "white");
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function rainbowColour() {
    $(".contain").mouseover(function() {
        $(this).css("background-color", getRandomColor());
      });
}

function redColour() {
    $(".contain").mouseover(function() {
        $(this).css("background-color", "red");
      });
}

function blackColour() {
    $(".contain").mouseover(function() {
        $(this).css("background-color", "black");
      });
}

function setGrid() {
    var size = prompt("How many squares per side for new grid?");

    clearGrid();
    createGrid(size);
}