// 같은 페이지에 머물면서 양식 데이터로 무언가를 하기 위해서는 event prevent default를 사용해야 한다.
// e.preventDefault()는 주어진 이벤트에 의해 트리거되는 기본 동작을 방지하는 것이다.
// 이는 양식 제출에만 국한되지 않는다.
// 고유한 기본 동작이 있는 다른 이벤트가 있지만 양식 제출이 가장 일반적인 예이다.
const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const catName = input.value;
    const newLi = document.createElement("li");
    newLi.innerText = catName;
    list.append(newLi);
    input.value = "";
});
