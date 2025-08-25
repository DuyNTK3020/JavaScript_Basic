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

const scores = [3,5,7,8,9];

let newScores = scores.map(x => x*2)

console.log(newScores);

const ages = [10,20,30,40,50,25,12,19];

const agesGreatThan18 = ages.filter(x => x > 18);

console.log(agesGreatThan18);