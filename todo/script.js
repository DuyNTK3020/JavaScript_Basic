const tbody = document.querySelector("#todos tbody");
let data = JSON.parse(localStorage.getItem("todo")) || [];

const createBtn = document.getElementById("createBtn");

createBtn.addEventListener("click", () => {
    window.location.href = "create.todo.html";
})

const reloadTable = () => {
    data = JSON.parse(localStorage.getItem("todo")) || [];
    tbody.innerHTML = '';
    data.forEach(element => {
    tbody.innerHTML += `<tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td><button class="delete-btn" data-id="${element.id}">Xóa</button></td>
            </tr>`
});
}

tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    // const id = e.target.dataset.id;
    const id = e.target.getAttribute('data-id');
    const newData = data.filter(item => item.id != id);
    localStorage.setItem("todo", JSON.stringify(newData));
    reloadTable();
  }
});

reloadTable();