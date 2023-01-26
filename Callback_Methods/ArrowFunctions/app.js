// const add = function (x, y) {
//     return x + y;
// };

// function add(x, y) {
//     return x + y;
// }

const add = (x, y) => {
    return x + y;
};

const square = (x) => {
    return x * x;
};

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// };

// 함수의 중괄호를 소괄호 ()로 바꾸면 임시적 반환을 할 수 있다.
// 괄호를 없애고 한 줄로 써도 무방하다.

const rollDie = () => Math.floor(Math.random() * 6) + 1;

const sub = (a, b) => a - b;
