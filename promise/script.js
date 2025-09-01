const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2");
            resolve("khanhduy");
        }, 2000);
    })
}

const test = myPromise();
console.log("test", test);
console.log("1");
myPromise().then(data => {
    console.log("3");
})