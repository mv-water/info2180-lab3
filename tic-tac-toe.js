//Javascript for the tic tac toe game


window.onload = function(){
    //#board div selects every div in the board div section
    let gameCells;
    gameCells = document.querySelectorAll("#board div");
    let cellState = ["","","","","","","","",""];
    let player = "X";

    for (let i =0; i <gameCells.length; i++){
        //applies the css square to every board div
        gameCells[i].classList.add("square");

        //Add an X or O whenever a square is clicked
        gameCells[i].addEventListener("click", function()
        {
            //If the cell is not empty, nothing happens
            if (cellState[i] !== ""){
                return;
            }


            gameCells[i].innerText = player;
            gameCells[i].classList.add(player);
            cellState[i] = player;

            if (player === "X"){
                player = "O";
            }
            else{
                player = "X";
            }
        })


    }

    //Added style changes when mouse hovers over a cell 
    gameCells[i].addEventListener("mouseover", function()
    {
        gameCells[i].classList.add("hover");
    });

    gameCells[i].addEventListener("mouseout", function()
    {
        gameCells[i].classList.remove("hover");
    });


    


}


