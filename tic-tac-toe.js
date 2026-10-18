//Javascript for the tic tac toe game
let cellState = ["","","","","","","","",""];
let gameCells;
let winningConditions = [
    [0,1,2], //row 1 
    [3,4,5], //row 2 
    [6,7,8], //row 3 
    [0,4,8], //diagonal 1
    [2,4,6], //diagonal 2
    [0,3,6], //column 1 
    [1,4,7], //column 2
    [2,5,8]//column 3 

];
let gameOver = false;

window.onload = function(){
    //#board div selects every div in the board div section

    gameCells = document.querySelectorAll("#board div");
    const status = document.getElementById("status")
    let player = "X";

    for (let i =0; i <gameCells.length; i++){
        //applies the css square to every board div
        gameCells[i].classList.add("square");

        //Add an X or O whenever a square is clicked
        gameCells[i].addEventListener("click", function()
        {
            //If the cell is not empty, nothing happens
            if (cellState[i] != ""){
                return;
            }


            this.innerText = player;
            this.classList.add(player);
            cellState[i] = player;

            //check for winner after every move

            for(let winCondition of winningConditions){
                let cell1 = cellState[winCondition[0]];
                let cell2 = cellState[winCondition[1]];
                let cell3 = cellState[winCondition[2]];

                if (cell1 == cell2 && cell2 == cell3 && cell1 != "")
                {
                    status.textContent = "Congratulations! " + cell1 + " is the Winner!";
                    status.classList.add("you-won");
                    gameOver = true;
                    return;
                }
            }

            if (player == "X"){
                player = "O";
            }
            else{
                player = "X";
            }
        })

        //fuction to allow style changes when mouse hovers over a cell 
        gameCells[i].addEventListener("mouseover", function()
        {
            this.classList.add("hover");
        });

        gameCells[i].addEventListener("mouseout", function()
        {
            this.classList.remove("hover");
        });

        

    }




    


}


