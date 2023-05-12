const body = document.querySelector("body");
const cancelButton = document.querySelector("#cancel");

const timeOut = setTimeout((e) =>{
    body.style.backgroundColor = "green";
} , 2000);

function cancelTimeout()
{
    clearTimeout(timeOut);
}
cancelButton.addEventListener("click" , cancelTimeout);

