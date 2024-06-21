import homePage from "./homePage";
import menuPage from "./menuPage";
import aboutPage from "./aboutPage"
import "./styles.css"


homePage();
console.log("DFJI")


const homeBtn = document.querySelector("#home-btn")
const menuBtn = document.querySelector("#menu-btn")
const aboutBtn = document.querySelector("#about-btn")


let mainDiv = document.querySelector("#content");

homeBtn.addEventListener("click", () => {
    mainDiv.replaceChildren()
    homePage()
})


menuBtn.addEventListener("click", () => {
    mainDiv.replaceChildren()
    menuPage()
})

aboutBtn.addEventListener("click", () => {
    mainDiv.replaceChildren()
    aboutPage()
})

