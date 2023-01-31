document.querySelector("button").addEventListener("click", function (evt) {
    console.log(evt);
});
// 이벤트 개체는 모든 이벤트 처리기에서 엑세스할 수 있는 것이며 자동으로 전달된다.
// 이벤트에 대한 속성정보를 포함한다.

const input = document.querySelector("input");

// .key => 실제 입력된 키
// .code => 키보드 상의 실제 어떤 위치를 눌렀는지 (키보드의 물리적 위치)
input.addEventListener("keydown", function (e) {
    console.log(e.key);
    console.log(e.code);
});
// input.addEventListener("keyup", function () {
//     console.log("KEYUP");
// });

window.addEventListener("keydown", function (e) {
    switch (e.code) {
        case "ArrowUp":
            console.log("UP!");
            break;
        case "ArrowDown":
            console.log("DOWN!");
            break;
        case "ArrowLeft":
            console.log("LEFT!");
            break;
        case "ArrowRight":
            console.log("RIGHT!");
            break;
        default:
            console.log("IGNORED!");
    }
});
