const userName = document.getElementById("userName");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login");

const defaultUserName = "khanhduy@gmail.com";
const defaultPassword = "123456qaz";

loginBtn.addEventListener("click", () => {
    if (userName.value === defaultUserName && password.value === defaultPassword) {
        alert("Login successful!");
        window.location.href = "success.html";
    } else {
        alert("Login fail");
        password.style.borderColor = "red";
    }
})