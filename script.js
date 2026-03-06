console.log("Script Started")

function changeColor() {
    console.log("click");
    let color = prompt("Enter a new color:");
    let p = document.getElementById("poem");
    p.style.color = color;
}

function changeTextSize() {
    console.log("click");
    let size = prompt("Enter a new text size");
    let p = document.getElementById("poem");
    p.style.fontSize = size;
}

function changePoem() {
    console.log("click");
    let newPoem = prompt("Enter a new poem title; ");
    let p = document.getElementById("title");
    p.innerText = newPoem;

    let newPoemText = prompt("Enter a new poem");
    let p = document.getElementById("Poem");
    p.innerText = newPoemText;
}
