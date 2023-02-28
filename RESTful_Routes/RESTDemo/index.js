const { text } = require("express");
const express = require("express");
const app = express();
const path = require("path");

// url encoded parse
app.use(express.urlencoded({ extended: true }));
// json payload parse
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
    {
        id: 1,
        username: "chaeyeon",
        comment: "lol that is sooo funny!",
    },
    {
        id: 2,
        username: "wonpil",
        comment: "I like to go birdwatching with my dog.",
    },
    {
        id: 3,
        username: "joseho",
        comment: "I want to eat pasta",
    },
    {
        id: 4,
        username: "onlysayswoof",
        comment: "woof woof woof",
    },
];

app.get("/comments", (req, res) => {
    res.render("comments/index", { comments });
});

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find((c) => c.id === parseInt(id));
    res.render("comments/show", { comment });
});

app.get("/comments/new", (req, res) => {
    res.render("comments/new");
});

app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
    res.send("GET /tacos response");
});
app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
    console.log("ON PORT 3000!");
});

// username
// text
// bob - hello!

// Index / comments GET 모든 댓글 조회
// New / commnets / new GET 새로운 댓글 생성을 위한 Form
// Create / comments POST 서버에 새로운 댓글 생성
// Show /comments/:id GET 하나의 특정 댓글만 조회
// Edit / comments /: id / edit GET 특정 댓글 편집을 위한 Form
// Update / comments /:id PATCH 서버에 특정 댓글 업데이트
// Destroy / comments/:id DELETE 서버에 있는 특정 댓글 삭제
