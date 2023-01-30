// destructuring: 배열이나 객체에서 값을 풀거나 추출하거나 골라내는 좋은 방법이다.
// 배열에 대한 destructuring
const scores = [929321, 899342, 888336, 772729, 543671, 243567, 111934];

const highScore = scores[0];
const secondHighScore = scores[1];

// 모두 위치를 기반으로 한다.
// 독립형 변수로 추출
const [gold, silver, bronze, ...everyoneElse] = scores;

// 객체에 대한 destructuring
// 순서에 관한 것이 아니기 때문에 배열에서 구조화하는 것보다 더 실용적이다.

const user = {
    email: "myday0827@naver.com",
    password: "ksdhfuw3323",
    firstName: "chaeyeon",
    lastName: "yang",
    born: 2001,
    died: 2091,
    bio: "Chaeyeon yang was a korean.",
    city: "Seoul",
    state: "Seodaemun-gu",
};

// const firstName = user.firstName;
// const lastName = user.lastName;

// 두 구문은 동일하게 동작한다.
// const email = user.email;
// const { email } = user; // email 속성 아래에 사용자로부터 email이라는 변수를 만드십시오.

// 자체 변수로 분류하기 -> 원본 객체는 변경하지 않음
const { email, firstName, lastName, city, bio } = user;

// 이름 바꾸기
const { born: birthYear, died: deathYear } = user;

// 기본값 추가

const user2 = {
    email: "wonpil@naver.com",
    firstName: "wonpil",
    lastName: "kim",
    born: 1994,
    city: "Incheon",
    state: "Buk-gu",
};

// const { city, state, died = "N/A" } = user2;

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`;
// }

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`;
// }

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

const movies = [
    {
        title: "Amadeus",
        score: 99,
        year: 1984,
    },
    {
        title: "Sharknado",
        score: 35,
        year: 2013,
    },
    {
        title: "13 Going on 30",
        score: 70,
        year: 2004,
    },
    {
        title: "Stand By Me",
        score: 85,
        year: 1986,
    },
    {
        title: "Waterworld",
        score: 62,
        year: 1995,
    },
    {
        title: "Jingle All The Way",
        score: 71,
        year: 1996,
    },
    {
        title: "Parasite",
        score: 95,
        year: 2019,
    },
    {
        title: "Notting Hill",
        score: 77,
        year: 1999,
    },
    {
        title: "Alien",
        score: 90,
        year: 1979,
    },
];

movies.filter((movie) => movie.score >= 90);
movies.filter(({ score }) => score >= 90);

movies.map((movie) => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`;
});
movies.map(({ title, year, score }) => {
    return `${title} (${year}) is rated ${score}`;
});
