// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`);
//     for (let j = 1; j < 4; j++) {
//         console.log(`   j is: ${j}`);
//     }
// }

const seatingChart = [
    ["Kristen", "Erik", "Namita"],
    ["Geoffrey", "Juanita", "Antonio", "Kevin"],
    ["Yuma", "Sakura", "Jack", "Erika"],
];

for (let i = 0; i < seatingChart.length; i++) {
    for (let j = 0; j < seatingChart[i].length; j++) {
        console.log(seatingChart[i][j]);
    }
}
