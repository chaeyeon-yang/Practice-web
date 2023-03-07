// mongoose를 MongoDB 서버에 연결해야한다.
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/movieApp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Connected successfully to MongoDB server");
});
