// 함수에 전달된 모든 일ㄴ수를 자동으로 보유한다.

// function sum() {
//     return arguments.reduce((total, el) => total + el);
// }

// sum(3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 1, 2, 3);
// Error! reduce 사용 불가

// 전달된 모든 값은 nums에 저장된다.
function sum(...nums) {
    return nums.reduce((total, el) => total + el);
}

function raceResults(gold, sliver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SLIVER MEDAL GOES TO: ${sliver}`);
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}

raceResults("Tammy", "Todd", "Tina", "Trevor", "Travis");
