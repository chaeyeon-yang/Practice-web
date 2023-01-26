// 해당 콜백이 요소에 대해 true를 반환하면 해당 요소가 필터링된 배열에 추가된다.
// filter()는 가장 높은 평가를 받은 항목이나 오래된 항목. 새항목을 필터링 할 때 유용하게 사용할 수 있다.
const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

numbers.filter((n) => {
    return n < 10;
});

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

const goodMovies = movies.filter((m) => m.score > 80);
const goodTitles = goodMovies.map((m) => m.title);

movies.filter((m) => m.score > 80).map((m) => m.title);
const badMovies = movies.filter((m) => m.score < 70);

const recentMovies = movies.filter((m) => m.year > 2000);
