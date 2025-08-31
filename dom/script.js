const element = document.getElementById("username");
const element2= document.querySelector(".khanhduy");
console.log(element2);

const btn = document.getElementById("myBtn");
function handleClick() {
    console.log("Click");
    alert("Click");
}

btn.addEventListener("click", handleClick);

const text = document.getElementById("text");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", () => {
    text.innerHTML = "Hello Khanh Duy";
});

const changeColor = document.getElementById("changeColor");
changeColor.addEventListener("click", () => {
    text.style.color = "red";
})
