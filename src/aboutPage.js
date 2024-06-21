export default function aboutPage() {

    const mainDiv = document.querySelector("#content");
    // add a class
    mainDiv.classList.add("about-div")

    mainDiv.innerHTML = `
<h2>About</h2>
<p class='about-text'>
Every business has an origin story worth telling, and usually one that justifies why you do business and have clients.
<br>

Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.
<br>
Whatever it is, your story matters to your prospective buyers and team members. Make it entertaining and as immersive as you can.
</p>

`

}