const express = require("express");
const app = express();
const morgan = require("morgan");

// morgan("tiny");

// 모든 request 마다 실행됨 (use)
// morgan() => 요청에 대한 정보를 로깅함
app.use(morgan("dev"));

// app.use((req, res, next) => {
//     console.log("THIS IS MY FIRST MIDDLEWARE!!!");
//     return next();
//     console.log("THIS IS MY FIRST MIDDLEWARE = AFTER CALLING NEXT()");
// });
// app.use((req, res, next) => {
//     console.log("THIS IS MY SECOND MIDDLEWARE!!!");
//     return next();
// });
// app.use((req, res, next) => {
//     console.log("THIS IS MY THIRD MIDDLEWARE!!!");
//     return next();
// });

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use("/dogs", (req, res, next) => {
    console.log("I LOVE DOGS!!");
    next();
});

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === "chickennugget") {
        next();
    }
    res.send("SORRY YOU NEED A PASSWORD!!!");
};

app.get("/", (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send("HOME PAGE!");
});

app.get("/dogs", (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send("WOOF WOOF!");
});

app.get("/secret", verifyPassword, (req, res) => {
    res.send(
        "MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone"
    );
});

app.use((req, res) => {
    res.status(404).send("NOT FOUND!");
});

app.listen(8080, () => {
    console.log("App is running on localhost:8080");
});
