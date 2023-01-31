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

// 첫 번째 인자 => 발생하는 이벤트, 두 번째 인자 => 실행하려는 함수 콜백
const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
    alert("CLICKED!");
});

function twist() {
    console.log("TWIST!");
}

function shout() {
    console.log("SHOUT!");
}

const tasButton = document.querySelector("#tas");
// tasButton.onclick = shout;
// tasButton.onclick = twist;
// 나중에 쓴 함수로 덮어씌워진다, 따라서 두 개 이상의 콜백을 가질 수 없다.

// 버튼을 클릭할 때마다 실행하는 첫 번째 함수, 두 번째 함수
// addEventListener를 통해 원하는 만큼 다양한 콜백을 가질 수 있다.
tasButton.addEventListener("click", twist, { once: true });
tasButton.addEventListener("click", shout);
