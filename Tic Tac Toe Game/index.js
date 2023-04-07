const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const cells = document.querySelectorAll(".data-cell");
const board = document.getElementById("board");
let circleTurn;
const Winning_Combinations = [[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];
startGame();

function startGame ()
{  
    circleTurn =false;
    cells.forEach((i)=> {
        i.addEventListener("click",handleClick , {once: true})
    });
    setBoardHoverClass(); 
}

function handleClick(e)
{
    console.log("clicked");
    //Place Marker
    const cell =e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMarker(cell,currentClass);
    //Check for win
    if (checkWin(currentClass))
    {
        console.log("Winner");
    }
    //Check For draw
    switchTurns();
    setBoardHoverClass();
}

function placeMarker(cell,currentClass)
{
    cell.classList.add(currentClass);
    
}

function switchTurns()
{
    circleTurn =!circleTurn;
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if (circleTurn) {
      board.classList.add(CIRCLE_CLASS);
    } else {
      board.classList.add(X_CLASS);
    }
  }

function checkWin(currentClass) 
{
    return Winning_Combinations.some((combination)=>
    {
        return combination.every((Index)=>
        {
            return cellElements[Index].classList.contains(currentClass);
        });
    });
}