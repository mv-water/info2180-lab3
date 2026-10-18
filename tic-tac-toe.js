let gameCells;

window.onload = function(){
    //#board div selects every div in the board div section
    gameCells = document.querySelectorAll("#board div");
    let state = ["","","","","","","","",""];
    let player = "X";

    for (let i =0; i <gameCells.length; i++){
        //applies the css square to every board div
        gameCells[i].classList.add("square");

        gameCells[i].addEventListener("click", function(){
            if (state[i] !== ""){
                return;
            }

            gameCells[i].innerText = player;
            gameCells[i].classList.add(player);
            state[i] = player;

            if (player === "X"){
                player = "O";
            }
            else{
                player = "X";
            }
        })

        


    }

    


}


