const searchItem = document.querySelector("#item-input");
// console.log(searchItem);






const onPressed = ((e)=> {
    console.log("I was clicked");
}); 

const onKeyDown = ((e)=>{
    console.log("Keydown was pressed");
})
const onKeyUp = ((e)=>{
    console.log("KeyUp was done");

    });


//addEventlisteners
searchItem.addEventListener("keypress", onPressed);
searchItem.addEventListener("keydown", onKeyDown);
searchItem.addEventListener("keyup", onkeyup);