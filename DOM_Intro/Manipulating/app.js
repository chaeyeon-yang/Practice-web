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
