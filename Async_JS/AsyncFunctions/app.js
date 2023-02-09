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

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

// delayedColorChange("red", 1000)
//     .then(() => delayedColorChange("orange", 1000))
//     .then(() => delayedColorChange("yellow", 1000))
//     .then(() => delayedColorChange("green", 1000))
//     .then(() => delayedColorChange("blue", 1000))
//     .then(() => delayedColorChange("indigo", 1000))
//     .then(() => delayedColorChange("violet", 1000));

// promise가 해결될 때까지 실행을 중단한다.
async function rainbow() {
    await delayedColorChange("red", 1000);
    await delayedColorChange("orange", 1000);
    await delayedColorChange("yellow", 1000);
    await delayedColorChange("green", 1000);
    await delayedColorChange("blue", 1000);
    await delayedColorChange("indigo", 1000);
    await delayedColorChange("violet", 1000);
    return "ALL DONE!";
}

// rainbow().then(() => console.log("END OF RAINBOW!"));

async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW!");
}

printRainbow();

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("YOUR FAKE DATA HERE");
            }
            reject("Request Error!");
        }, 1000);
    });
};

async function makeTwoRequest() {
    try {
        let data1 = await fakeRequest("/page1");
        console.log(data1);
        let data2 = await fakeRequest("/page2");
        console.log(data2);
    } catch (e) {
        console.log("CAUGHT AAN ERROR!");
        console.log("error is:", e);
    }
}
