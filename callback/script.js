const greeting = (name, khanhduy) => {
    console.log("Xin chao", name);
    khanhduy();
}

const hello = () => {
    console.log("learn callback...")
}

greeting("Khanh Duy", hello);