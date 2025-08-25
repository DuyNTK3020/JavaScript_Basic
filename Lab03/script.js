const products = [
  {
    "name": "T-shirt",
    "price": 200,
    "inStock": true
  },
  {
    "name": "Jeans",
    "price": 500,
    "inStock": false
  },
  {
    "name": "Jacket",
    "price": 800,
    "inStock": true
  },
  {
    "name": "Sneakers",
    "price": 1200,
    "inStock": true
  },
  {
    "name": "Hat",
    "price": 150,
    "inStock": false
  }
];

// Question 1
console.log ("Question 1:", products[0].name);

// Question 2
products[1].price = 150;
products.forEach((value) => {
    console.log(value);
})

// Question 3
products.push({
    "name": "Backpack",
    "price": 300,
    "inStock": true});
console.log(products);

// Question 4
products.pop();
console.log(products);

// Question 5
products.forEach(x => console.log(x.name));

// Question 6
const prices = products.map(x => x.price);
console.log(prices);

// Question 7
const productsInStock = products.filter(x => x.inStock);
console.log(productsInStock);