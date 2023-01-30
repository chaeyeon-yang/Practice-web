const allImages = document.getElementsByTagName("img");

// for (let img of allImages) {
//     img.src =
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
// }

const squareImages = document.getElementsByClassName("square");
for (let img of squareImages) {
    img.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

// querySelector는 첫 번째 일치 항목을 제공한다.
// querySelectorAll는 일치하는 모든 항목을 제공한다.

const links = document.querySelectorAll("p a");

for (let link of links) {
    console.log(link.href);
}
