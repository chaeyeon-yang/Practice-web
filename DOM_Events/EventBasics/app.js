const btn = document.querySelector("#v2");

btn.onclick = function () {
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED!!");
};

function scream() {
    console.log("AAAAHHHH");
    console.log("STOP TOUCHING ME!");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = function () {
    alert("you clicked the h1!");
};
