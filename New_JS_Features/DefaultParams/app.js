// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

// 매개변수의 순서는 중요하다!
// 따라서 기본 매개변수는 항상 두 번째 또는 세 번째로 와야 한다.
function greet(person, msg = "Hey there", punc = "!") {
    console.log(`${msg}, ${person}${punc}`);
}
