const inputBar = document.getElementById("item-input");
const piority = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("header h1");

const onInput = ((e)=>{
    console.log(e.target.value);
    // console.log(e.target.c);
});

const onSelect = ((e)=>{
    console.log(e.target.value);
});

const onTick = ((e)=>{
    const checked = e.target.checked;
   
    heading.textContent = checked ? "Checked" : "Unchecked";
});

function onTouch (e)
{
    // inputBar.style.cursor = "pointer";
    inputBar.style.outlineColor = "red";
    inputBar.style.border = "1px solid red";
}

function offTouch(e){
    inputBar.style.outline="none";
    inputBar.style.border = "1px solid #ccc";
}

inputBar.addEventListener("input", onInput);
piority.addEventListener("input", onSelect);
checkbox.addEventListener("checked", onTick);
inputBar.addEventListener("focus", onTouch);
inputBar.addEventListener("blur", offTouch);