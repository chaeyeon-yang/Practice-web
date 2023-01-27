// 함수에 대한 0개 이상의 인수가 있는 위치에서 배열과 같은 반복 가능 항목을 확장할 수 있다.

const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];

Math.max(...nums); // 53456
Math.max(nums); // NaN

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

// Spread를 사용하여 내용 복사.
const allPets = [...cats, ...dogs];

console.log([..."hello"]);
