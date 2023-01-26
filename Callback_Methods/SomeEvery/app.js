// 새 배열을 반환하는 map 또는 filter와 달리 이 두가지 메서드 (some, every)는 항상 true
// 혹은 fasle를 반환하며 배열의 모든 요소가 일부 테스트를 통과하는지 테스트하는 방법이다.
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

// 각 요소가 콜백을 통해 전달된다. 모든 값이 true를 반환해야 true 결과값이 나온다.
exams.every((score) => score >= 75);

// 각 요소가 콜백을 통해 전달된다. 하나 이상만 true를 반환하면 true 결과값이 나온다.
exams.some((score) => score >= 75);
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
        title: "13 Going On 30",
        score: 70,
        year: 2004,
    },
    {
        title: "Waterworld",
        score: 62,
        year: 1996,
    },
    {
        title: "Jingle All The Way",
        score: 71,
        year: 1996,
    },
    {
        title: "Stand By Me",
        score: 85,
        year: 2013,
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

movies.some((movie) => movie.year > 2015);
