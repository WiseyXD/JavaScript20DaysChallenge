const form = document.getElementById("item-form");

function onSubmit (e)
{
    e.preventDefault();
    const inputBar = document.getElementById("item-input");
    const priority = document.getElementById("item-priority");
    console.log(inputBar.value,priority.value);
    // if(inputBar === "" || priority === "0")
    //     {
    //         alert("Tillz Fill it properly!");
    //         return;
    //     }
}

function onSubmit2 (e)
{
    const formData = new FormData();

}


form.addEventListener("submit", onSubmit );