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
        username: "chaeyeon",
        comment: "lol that is sooo funny!",
    },
    {
        username: "wonpil",
        comment: "I like to go birdwatching with my dog.",
    },
    {
        username: "joseho",
        comment: "I want to eat pasta",
    },
    {
        username: "onlysayswoof",
        comment: "woof woof woof",
    },
];

app.get("/comments", (req, res) => {
    res.render("comments/index", { comments });
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

// GET /comments - list all comments
// POST /comments = Create a new comment
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELTE /comments/:id - Destroy one comment
