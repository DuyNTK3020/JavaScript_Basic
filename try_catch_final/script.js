
const doSomething = () => {
    const a = 10, b = 0;

    if (b == 0) {
        throw new Error("Thuc hien chia cho 0");
    }
    console.log(a/b);
}

try {
    doSomething();
} catch (error) {
    console.log(error);
} finally {
    console.log("Thuc hien doSomething");
}