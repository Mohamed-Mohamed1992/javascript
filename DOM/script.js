let theWannaBes = document.getElementsByClassName("wannabe-first")
theWannaBes[0].style.color = "blue"
theWannaBes[0].style.fontSize = "50px"

theWannaBes[1].style.color = "green"
theWannaBes[1].style.fontSize = "70px"

for (let i = 1; i <= 500; i++) {
let firstH1 = document.createElement("h1");
firstH1.innerHTML = i + " Hello <br> World";
firstH1.style.color = "red"
document.body.appendChild(firstH1)
document.body.style.backgroundColor = "yellow"
}