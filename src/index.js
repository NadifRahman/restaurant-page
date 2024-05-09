import mainPage from "./mainpage";
import aboutPage from "./about";
mainPage();

let mainBtn = document.querySelector(`.home`);
mainBtn.addEventListener('click', mainPage)
let aboutBtn = document.querySelector(`.about`);

aboutBtn.addEventListener('click', aboutPage);