const password = prompt("please enter a new password");

// password must be 6+ characters
if (password.length >= 6) {
    // password cannot include space
    if (password.indexOf(" ") === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!");
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters");
}
