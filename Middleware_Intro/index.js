const express = require("express");
const app = express();
const morgan = require("morgan");

// morgan("tiny");

// 모든 request 마다 실행됨 (use)
// morgan() => 요청에 대한 정보를 로깅함
app.use(morgan("dev"));
app.use((req, res, next) => {
    console.log("THIS IS MY FIRST MIDDLEWARE!!!");
    return next();
    console.log("THIS IS MY FIRST MIDDLEWARE = AFTER CALLING NEXT()");
});
app.use((req, res, next) => {
    console.log("THIS IS MY SECOND MIDDLEWARE!!!");
    return next();
});
app.use((req, res, next) => {
    console.log("THIS IS MY THIRD MIDDLEWARE!!!");
    return next();
});

app.get("/", (req, res) => {
    res.send("HOME PAGE!");
});

app.get("/dogs", (req, res) => {
    res.send("WOOF WOOF!");
});

app.listen(8080, () => {
    console.log("App is running on localhost:8080");
});
