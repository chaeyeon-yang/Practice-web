function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

function repeat(str, numTimes) {
    for (let i = 0; i < numTimes; i++) {
        console.log("HI");
    }
}

function add(x, y) {
    if (typeof x !== number || typeof y !== number) {
        return false;
    }
    return x + y;
}

// repeat("hgjhgj", 5);
// greet("Clooney", "George");
// singSong();
