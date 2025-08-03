const score = 4.0;

if (score >= 3.6) {
    console.log("Xuat sac");
}
else if (score >= 3.2) {
    console.log("Gioi");
}
else if (score >= 2.8) {
    console.log("Kha");
}
else {
    console.log("Tach");
}

function greeting() {
    console.log("say hi");
}

greeting();

// function sum(a, b) {
//     return a + b;
// }

const sum = (a, b) => {
    return a + b;
}

const a = 1;
const b = 2;

console.log(`Tong cua ${a} + ${b} = ${sum(a, b)}`)