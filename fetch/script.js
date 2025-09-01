const temp = fetch("http://localhost:8000/users");

console.log(temp); 

const d = temp.then(res => res.json()).then(data => console.log(data));
console.log(d);