// reduce는 일부 배열울 가져와서 단일 값으로 줄인다.
// reduce에서 반환하는 것은 무엇이든 accumulator의 다음 반복에서 사용된다.

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;
// for (let price of prices) {
//     total += price;
// }

// console.log(total);

const total = prices.reduce((total, price) => total + price);

// 배열에서 최대/최소 값 찾기

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
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

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (bestMovie.score < currMovie.score) {
        return currMovie;
    }
    return bestMovie;
});

// accumulator 매개변수의 초기 시작점을 정할 수도 있다.
// 두 번째 인수를 통해 초기값을 설정할 수 있다.

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100);
