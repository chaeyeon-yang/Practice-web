const mongoose = require("mongoose");
mongoose
    .connect("mongodb://127.0.0.1:27017/shopApp")
    .then(() => {
        console.log("CONNECT OPEN!!!");
    })
    .catch((err) => {
        console.log("OH NO ERROR!!!!");
        console.log(err);
    });

const personSchema = new mongoose.Schema({
    first: String,
    last: String,
});

// virtual 속성은 데이터베이스에 위치하는 몽구스 쪽에만 존재한다.
personSchema.virtual("fullName").get(function () {
    return `${this.first} ${this.last}`;
});

const Person = mongoose.model("Person", personSchema);
