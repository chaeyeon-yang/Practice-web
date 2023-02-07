const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure("Connection Timeout :(");
        } else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay);
};

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection Timeout :(");
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        });
    });
};

// fakeRequestCallback(
//     "books.com/page1",
//     function (response) {
//         console.log("IT WORKED!!!!");
//         console.log(response);
//         fakeRequestCallback(
//             "books.com/page2",
//             function (response) {
//                 console.log("IT WORKED!!!!");
//                 console.log(response);
//                 fakeRequestCallback(
//                     "books.com/page3",
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!");
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err);
//                     }
//                 );
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err);
//             }
//         );
//     },
//     function () {
//         console.log("ERROR!!!", err);
//     }
// );

fakeRequestPromise("yeee.com/api/coffe/page1")
    .then(() => {
        console.log("IT WORKED!!!! (page1)");
        fakeRequestPromise("yeee.com/api/coffe/page2")
            .then(() => {
                console.log("IT WORKED!!!! (page2)");
                fakeRequestPromise("yeee.com/api/coffe/page3")
                    .then(() => {
                        console.log("IT WORKED!!!! (page3)");
                    })
                    .catch(() => {
                        console.log("OH NO, ERROR!!! (page3)");
                    });
            })
            .catch(() => {
                console.log("OH NO, ERROR!!! (page2)");
            });
    })
    .catch(() => {
        console.log("OH NO, ERROR!!! (page1)");
    });
