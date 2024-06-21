export default function homePage() {
  const mainDiv = document.querySelector("#content");

  // add a class
  mainDiv.classList.add("home-div")


  const title = document.createElement("h1");
  title.innerText = "Restaurant Namey";
  mainDiv.appendChild(title);



  const restaurantImage = document.createElement("img");
  restaurantImage.setAttribute("src", "https://community.gamedev.tv/uploads/db2322/optimized/3X/3/1/31d598cba55d15a4a92b7730ade1ef592c6d374f_2_690x388.jpeg")
  restaurantImage.setAttribute("width", "304");
  restaurantImage.setAttribute("height", "228");
  mainDiv.appendChild(restaurantImage);

  const descriptionText = document.createElement("p")
  descriptionText.innerText = `"Foul tarnished, in search of the Elden Ring. Emboldened by the flame of ambition. Someone must extinguish thy flame. Let it be Margit the Fell"`
  mainDiv.appendChild(descriptionText);


}
