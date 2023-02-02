const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// change 이벤트는 입력을 흐리게 처리한 다음 키를 내릴 때만 실행된다.
// 또한 복사 및 붙여넣기와 같은 것을 포함하지 않는다.
// input.addEventListener("change", function (e) {
//     console.log("Sfsdfsdf");
// });

// input 이벤트는 key down, key up, shift, 화살표키를 누를 때마다 트리거된다.
input.addEventListener("input", function (e) {
    h1.innerText = input.value;
});
