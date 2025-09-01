const fetchData = async() => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    console.log(data);
}

fetchData();