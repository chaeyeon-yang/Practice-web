// 함수에 대한 0개 이상의 인수가 있는 위치에서 배열과 같은 반복 가능 항목을 확장할 수 있다.

// Spread with Array Literals
const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];

Math.max(...nums); // 53456
Math.max(nums); // NaN

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

// Spread를 사용하여 내용 복사.
const allPets = [...cats, ...dogs];

console.log([..."hello"]);

// Spread with Objects
const feline = { leg: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

console.log({ ...feline, color: "black" });
console.log({ ...[2, 4, 6, 8] });

const dataFromForm = {
    email: "blueman@gmail.com",
    password: "tobias123!",
    username: "tfunke",
};

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
