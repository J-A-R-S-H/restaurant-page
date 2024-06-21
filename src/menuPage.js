export default function menuPage() {
    const mainDiv = document.querySelector("#content");

    // add a class
    mainDiv.classList.add("menu-div")

    // add a title 
    const title = document.createElement("h1");
    title.innerText = "Restaurant Menu";
    mainDiv.appendChild(title);


    // add a card
    const cardContainer = document.createElement("section")
    mainDiv.appendChild(cardContainer)
    for (let index = 0; index < 6; index++) {

        const card = document.createElement("article");
        cardContainer.appendChild(card);


        const cardImage = document.createElement("img");
        cardImage.setAttribute("src", "https://www.denofgeek.com/wp-content/uploads/2024/02/Shadow-of-the-Erdtree.png?fit=1903%2C916")
        cardImage.setAttribute("width", "304");
        cardImage.setAttribute("height", "228");
        card.appendChild(cardImage);


        const cardText = document.createElement("div")
        cardText.classList.add("card-container")

        card.appendChild(cardText)
        const cardName = document.createElement("h2");
        cardName.innerText = "Title Card";
        cardText.appendChild(cardName);

        const cardDescription = document.createElement("span");
        cardDescription.innerText = "Something about the card description";
        cardText.appendChild(cardDescription);

    }



}
