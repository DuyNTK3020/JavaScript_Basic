let name = localStorage.getItem("yourName");

const input = document.getElementById("name");
const btn = document.getElementById("submitButton");
const message = document.getElementById("message");
message.innerText = localStorage.getItem("yourName") ? localStorage.getItem("yourName") : "";

btn.addEventListener("click", () => {
    localStorage.setItem("yourName", input.value);
    console.log(input.value);
    message.innerText = input.value;
})