const tbody = document.querySelector("#users tbody");

const fetchData = async() => {
    const res = await fetch("http://localhost:8000/users");
    const users = await res.json();
    users.forEach(user => {
        tbody.innerHTML += `<tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>`
    });
}

fetchData();