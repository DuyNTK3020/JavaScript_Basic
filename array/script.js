let colors = ["red", "green", "blue"];

console.log(colors[0]);

colors[0] = "yellow"

console.log(colors[0]);

console.log(colors);

colors.push("orange");
console.log(colors);

colors.unshift("test");
console.log(colors);

colors.pop();
console.log(colors);

colors.shift()
console.log(colors);

const length = colors.length;

for (let i = 0; i < length; i++) {
    console.log("i =", i, "color =", colors[i]);
}

colors.forEach((value, index) => {console.log("value", value, "index", index)})