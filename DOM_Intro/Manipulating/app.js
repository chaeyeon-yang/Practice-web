const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//     link.innerText = "I AM A LINK!!!";
// }

document.querySelector("h1").innerHTML = "<i>adsfd</i>";
document.querySelector("h1").innerHTML += "<sup>ddd</sup>";
document.querySelector("p").innerText = "dsfsdf";

// 두 설정 방식에는 약간의 차이가 있다.
const input = document.querySelector("input");
input.setAttribute("type", "color");
input.type = "color";
for (let link of allLinks) {
    link.style.color = "rgb(0,108,134)";
    link.style.textDecorationColor = "magenta";
    link.style.textDecorationStyle = "wavy";
}

const h2 = document.querySelector("h2");
h2.setAttribute("class", "purple");
h2.setAttribute("class", "border");

let currentClasses = h2.getAttribute("class");

// css 에서 하나 이상의 클래스를 갖는 방법
h2.setAttribute("class", `${currentClasses} purple`);

h2.classList;
h2.classList.add("purple");
h2.classList.remove("border");
h2.classList.contains("border");

h2.classList.toggle("puple");
h2.classList.toggle("puple");
h2.classList.toggle("puple");

const firstBold = document.querySelector("b");
const paragraph = firstBold.parentElement;
paragraph.children;

const squareImg = document.querySelector(".square");
squareImg.nextSibling; // 공백이 text node로 됨
squareImg.nextElementSibling; // img
