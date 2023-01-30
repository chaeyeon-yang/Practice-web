// destructuring: 배열이나 객체에서 값을 풀거나 추출하거나 골라내는 좋은 방법이다.

const scores = [929321, 899342, 888336, 772729, 543671, 243567, 111934];

const highScore = scores[0];
const secondHighScore = scores[1];

// 독립형 변수로 추출
const [gold, silver, bronze, ...everyoneElse] = scores;
