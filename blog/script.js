const tbody = document.querySelector("#blogs tbody");

const title = document.getElementById("title");
const author = document.getElementById("author");
const content = document.getElementById("content");

const submitBtn = document.getElementById("submitBtn");

const reloadTable = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const blogs = await res.json();
    tbody.innerHTML = '';
    blogs.forEach(blog => {
    tbody.innerHTML += `<tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td><button class="delete-btn" data-id="${blog.id}">Xóa</button></td>
            </tr>`
    })
}

tbody.addEventListener("click", async (e) => {
  if (e.target.classList.contains("delete-btn")) {
    // const id = e.target.dataset.id;
    const id = e.target.getAttribute('data-id');
    const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
    method: 'DELETE',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
    });

    const data = await rawResponse.json();
    console.log(data);
    reloadTable();
  }
});

reloadTable();

submitBtn.addEventListener("click", async () => {
    const rawResponse = await fetch('http://localhost:8000/blogs', {
    method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: title.value, author: author.value, content: content.value})
    });
    const returnData = await rawResponse.json();
    reloadTable();
})