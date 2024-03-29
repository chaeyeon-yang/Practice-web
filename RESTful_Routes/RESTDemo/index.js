const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid"); // generating ID's

// url encoded parse, To parse form data in POST request body
app.use(express.urlencoded({ extended: true }));
// json payload parse, To parse incoming JSON in POST request body
app.use(express.json());
// To 'fake' put/patch/delete requests
app.use(methodOverride("_method"));
// Views folder and EJS setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// fake database
let comments = [
    {
        id: uuid(),
        username: "chaeyeon",
        comment: "lol that is sooo funny!",
    },
    {
        id: uuid(),
        username: "wonpil",
        comment: "I like to go birdwatching with my dog.",
    },
    {
        id: uuid(),
        username: "joseho",
        comment: "I want to eat pasta",
    },
    {
        id: uuid(),
        username: "onlysayswoof",
        comment: "woof woof woof",
    },
];
// **********************************
// INDEX - renders multiple comments
// **********************************
app.get("/comments", (req, res) => {
    res.render("comments/index", { comments });
});
// **********************************
// NEW - renders a form
// **********************************
app.get("/comments/new", (req, res) => {
    res.render("comments/new");
});
// **********************************
// CREATE - creates a new comment
// **********************************
app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect("/comments");
});
// *******************************************
// SHOW - details about one particular comment
// *******************************************
app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find((c) => c.id === id);
    res.render("comments/show", { comment });
});
// *******************************************
// EDIT - renders a form to edit a comment
// *******************************************
app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find((c) => c.id === id);
    res.render("comments/edit", { comment });
});
// *******************************************
// UPDATE - updates a particular comment
// *******************************************
app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find((c) => c.id === id);

    // get new text from req.body
    const newCommentText = req.body.comment;
    // update the comment with the data from req.body
    foundComment.comment = newCommentText;
    // redirect back to index
    res.redirect("/comments");
});

// *******************************************
// DELETE/DESTROY- removes a single comment
// *******************************************
app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    comments = comments.filter((c) => c.id !== id);
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
