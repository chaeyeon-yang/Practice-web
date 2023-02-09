// async키워드를 붙이면 자동으로 promise를 반환한다.
async function hello() {}

// async 함수가 값을 반환하면 그 값으로 resolved 된다.
// 오류를 발생시키면 reject 된다.
// const sing = async () => {
//     throw "OH NO, PROBLEM!";
//     return "LA LA LA LA";
// };

// sing()
//     .then((data) => {
//         console.log("PROMISE RESOLVED WITH:", data);
//     })
//     .catch((err) => {
//         console.log("OH NO, PROMISE REJECTED!");
//         console.log(err);
//     });

const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials";
    if (password === "corgifeetarecute") return "WELCOME!";
    throw "Invalid Password";
};

login("askljfds", "corgifeetarecute")
    .then((msg) => {
        console.log("LOGGED IN!");
        console.log(msg);
    })
    .catch((err) => {
        console.log("ERROR!");
        console.log(err);
    });
