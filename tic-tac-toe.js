

let gameCells;


window.onload = function(){
    //#board div selects every div in the board div section
    gameCells = document.getElementsByClassName("#board div");

    for (let i =0; i <gameCells.length; i++){
        //applies the css square to every board div
        gameCells[i].classList.add("square");
    }
}