import './main.css';

export default function mainPage() {
    let nav = document.querySelector("#content");
    while (nav.firstChild){//delete all child notes
        nav.removeChild(nav.firstChild);
    }
    let elementOne = document.createElement("div");
    elementOne.textContent = "yoooo crazy";
    let elementTwo = document.createElement("div");
    elementTwo.textContent = "we do not care";
    nav.appendChild(elementOne);
    nav.appendChild(elementTwo);
}

