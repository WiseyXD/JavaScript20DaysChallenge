let intervalID = 0;
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const body = document.querySelector("body");

function startChange()
{
    if (intervalID == 0)
    {
         intervalID = setInterval(pickRandomColor,1000);
    }
    
}

// function colorChange ()
// {
//     if ( body.style.backgroundColor !== "green")
//     {

//         body.style.backgroundColor = "green";
//     }
//     else
//     {
//         body.style.backgroundColor = "grey";
//     }

// }

function pickRandomColor ()
{

        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        body.style.backgroundColor = `#${randomColor}`;
        console.log("hi");
    
    
}

function clearIntervalID()
{
    clearInterval(intervalID);
    body.style.backgroundColor = "white";
    intervalID = 0;
}
startButton.addEventListener("click" , startChange);
stopButton.addEventListener("click" , clearIntervalID);
console.log("hello");