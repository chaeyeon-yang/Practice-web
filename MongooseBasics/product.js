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

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Product = mongoose.model("Product", productSchema);

// 스키마에 정의되지 않은 추가 정보를 담아도 오류가 나지 않는다.
// 하지만 데이터베이스에 저장되지 않는다.
const bike = new Product({ name: "Mountain Bike", price: 999, color: "red" });
bike.save()
    .then((data) => {
        console.log("IT WORKED!");
        console.log(data);
    })
    .catch((err) => {
        console.log("OH NO ERROR!");
        console.log(err);
    });
