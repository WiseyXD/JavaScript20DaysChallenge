// let x;
// const div = document.createElement=("div");
// const text1 = document.createTextNode = (x);
// div.appendChild(text1);

const parentDiv1 = document.querySelector(".key1");
const parentDiv2 = document.querySelector(".key2");
const parentDiv3 = document.querySelector(".key3");


// parentDiv.appendChild(div);
const onClick = ((e)=>{
    parentDiv1.innerHTML = e.key;
    parentDiv2.innerHTML = e.code;
    parentDiv3.innerHTML = e.keyCode;

});
document.body.addEventListener("keydown",onClick);
