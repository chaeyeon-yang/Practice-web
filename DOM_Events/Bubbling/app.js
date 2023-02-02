const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

// e.stopPropagation() -> 이벤트가 버블링되는 것을 방지함
button.addEventListener("click", function (e) {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();
});

container.addEventListener("click", function () {
    container.classList.toggle("hide");
});

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};
