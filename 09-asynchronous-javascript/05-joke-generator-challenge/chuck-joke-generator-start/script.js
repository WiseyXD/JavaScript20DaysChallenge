const getJoke = document.getElementById("joke");
const button = document.getElementById("joke-btn")


function generateJoke ()
{
    const xhr = new XMLHttpRequest();
xhr.open("GET" , "https://api.chucknorris.io/jokes/random");

xhr.onreadystatechange = function () 
{
    if (this.readyState == 4 && this.status == 200)
    {
        const joke = JSON.parse(this.responseText);
        getJoke.innerHTML = `<strong>${joke.value}</strong>`;
    }
}
xhr.send()
}


button.addEventListener("click" , generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);