let input = prompt("What would you like to do?");

const todos = [];
while (input !== "quit" && input !== "q") {
    if (input === "new") {
        input = prompt("Enter new todo");
        todos.push(input);
        console.log(`${input} added to list`);
    }
    if (input === "list") {
        console.log("**********");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********");
    }
    if (input === "delete") {
        index = parseInt(prompt("Enter index of todo to delete"));
        todos.splice(index, 1);
        console.log("Todo Removed");
    }
    input = prompt("Would you like to do?");
}

console.log("OK, YOU QUIT THE APP");
