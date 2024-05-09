import './about.css'

export default function aboutPage() {
    let nav = document.querySelector("#content");
    while (nav.firstChild){//delete all child notes
        nav.removeChild(nav.firstChild);
    }
    let elementOne = document.createElement("div");
    elementOne.textContent = "aboutie";
    let elementTwo = document.createElement("div");
    elementTwo.textContent = "lol aboutie";
    nav.appendChild(elementOne);
    nav.appendChild(elementTwo);
}