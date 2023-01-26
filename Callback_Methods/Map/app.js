// forEach 와 다른 점은 반환을 사용하여 결과 값인 새 배열을 생성한다는 것이다.
// 따라서 한 상태에서 다른 상태로 배열을 매핑하는 방법이다.

const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const doubles = numbers.map(function (num) {
    return num * 2;
});

const movies = [
    {
        title: "Amadeus",
        score: 99,
    },
    {
        title: "Stand By Me",
        score: 85,
    },
    {
        title: "Parasite",
        score: 95,
    },
    {
        title: "Alien",
        score: 90,
    },
];

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
});
