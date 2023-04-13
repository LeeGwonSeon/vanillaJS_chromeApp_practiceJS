const title = document.querySelector(".hello:first-child h1");

console.log(title);

title.innerText = "Got it!";

function handleTitleClick() {
    title.style.color = "red";
}

title.addEventListener("click", handleTitleClick);