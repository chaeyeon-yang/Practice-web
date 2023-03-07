// mongoose를 MongoDB 서버에 연결해야한다.
const mongoose = require("mongoose");
mongoose
    .connect("mongodb://127.0.0.1:270232417/movieApp")
    .then(() => {
        console.log("CONNECT OPEN!!!");
    })
    .catch((err) => {
        console.log("OH NO ERROR!!!!");
        console.log(err);
    });
