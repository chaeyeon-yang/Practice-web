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
        maxLength: 20,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    onSale: {
        type: Boolean,
        default: false,
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0,
        },
        inStore: {
            type: Number,
            default: 0,
        },
    },
});

const Product = mongoose.model("Product", productSchema);

// 스키마에 정의되지 않은 추가 정보를 담아도 오류가 나지 않는다.
// 하지만 데이터베이스에 저장되지 않는다.
const bike = new Product({
    name: "Tire Pump",
    price: 19.5,
    categories: ["Cycling"],
});
// bike.save()
//     .then((data) => {
//         console.log("IT WORKED!");
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("OH NO ERROR!");
//         console.log(err);
//     });

// 업데이트를 진행할 때 초기 설정해놓은 스키마의 유효성 검사가 무시된다.
// 따라서 옵션으로 설정한 후 update 해줘야 유효성이 안무너진다.
Product.findOneAndUpdate(
    { name: "Tire Pump" },
    { price: -9.99 },
    { new: true, runValidators: true }
)
    .then((data) => {
        console.log("IT WORKED!");
        console.log(data);
    })
    .catch((err) => {
        console.log("OH NO ERROR!");
        console.log(err);
    });
