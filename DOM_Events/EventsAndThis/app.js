const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");

// for (let button of buttons) {
//     button.addEventListener("click", function () {
//         this.style.backgroundColor = makeRandColor();
//         this.style.color = makeRandColor();
//     });
// }

const h1s = document.querySelectorAll("h1");
// for (let h1 of h1s) {
//     h1.addEventListener("click", function () {
//         this.style.backgroundColor = makeRandColor();
//         this.style.color = makeRandColor();
//     });
// }

for (let button of buttons) {
    button.addEventListener("click", colorize);
}

for (let h1 of h1s) {
    h1.addEventListener("click", colorize);
}
// 키워드 this를 사용하기 때문에 이 함수는 이벤트 콜백으로 두 가지 경우모두에 대해 작동한다.
function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}
