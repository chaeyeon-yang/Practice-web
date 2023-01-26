// setTimeout() -> 일정 시간 경과 후 콜백함수를 한 번 실행
console.log("HELLO!!!...");
setTimeout(() => {
    console.log("...are you still there?");
}, 3000);

console.log("GOODBYE!!");

// setInterval() -> 일정한 간격으로 함수를 반복할 수 있도록 x 밀리초마다 콜백을 호출

const id = setInterval(() => {
    console.log(Math.random());
}, 2000);

// clearInterval(id)
