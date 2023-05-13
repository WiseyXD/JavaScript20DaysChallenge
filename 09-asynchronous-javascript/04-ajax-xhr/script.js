const ul = document.querySelector("#results");
const xhr = new XMLHttpRequest();

xhr.open("GET","./movies.json");

xhr.onreadystatechange = function ()
{
    if(this.readyState === 4 && this.status === 200)
    {
        const respone = JSON.parse(this.responseText);
        respone.forEach(movies => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${movies.title}</strong> - ${movies.year}`;
            ul.appendChild(li);
        });

    }
}

xhr.send();