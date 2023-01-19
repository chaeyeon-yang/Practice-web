// let count = 0;
// while (count < 10) {
//     console.log(count);
//     count++;
// }

const SECRET = "BabyHippo";

let guess = prompt("enter the secret code...");

while (guess !== SECRET) {
    guess = prompt("enter the secret code...");
}

console.log("CONGRATS YOU GOT THE SECRET!!!");
