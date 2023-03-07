// mongoose를 MongoDB 서버에 연결해야한다.
const mongoose = require("mongoose");
mongoose
    .connect("mongodb://127.0.0.1:27017/movieApp")
    .then(() => {
        console.log("CONNECT OPEN!!!");
    })
    .catch((err) => {
        console.log("OH NO ERROR!!!!");
        console.log(err);
    });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
});

// 생성할 모델 이름, 스키마
// Movie로 모델명을 만듦면 몽구스는 movies라는 컬렉션을 생성한다.
const Movie = mongoose.model("Movie", movieSchema);
const amadeus = new Movie({
    title: "Amadeus",
    year: 1986,
    score: 9.2,
    rating: "R",
});
