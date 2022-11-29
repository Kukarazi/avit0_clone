//POPUP
const overlay = document.querySelector("#overlay");
// opening popup
document.querySelector("#show-modal-btn").addEventListener("click", () => {
  overlay.style.display = "block";
});
// closing popup
document.querySelector("#close-modal-btn").addEventListener("click", () => {
  overlay.style.display = "none";
});
//////CAROUSEL//////
//function for making a simple element of carousel layout//
let makeElement = function (tagName, className, text) {
  let element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};
// function for creating a full story-circle element in carousel //
let createStory = function () {
  let carouselItem = makeElement("div", "story-previewer-circle"); // first outer div

  let storyBlock = makeElement("div", "story-previewer-block"); // second inner div ( child of outer div)
  carouselItem.appendChild(storyBlock);

  let image = makeElement("img", "story-previewer-image"); // image ( child of inner div)
  image.src =
    "https://42.img.avito.st/image/1/1.4_D6ibayhWVO8k_DTta9gY5cTRtOLks.5zWARcA20WbAzxNge4DtknELjlAWV3dt21GECGUKVL0";
  image.alt = "test-text";
  storyBlock.appendChild(image);

  let title = makeElement("div", "story-previewer-title", "test-text"); // text under the image ( child of outer div)
  carouselItem.appendChild(title);

  return carouselItem; // returning ready carousel story item
};
let carousel = document.querySelector(".carousel-list");
// let storyItem = createStory();
// carousel.appendChild(storyItem); // attaching ready item to carousel list

for (let i = 0; i < 15; i++) {
  let storyItem = createStory();
  carousel.appendChild(storyItem);
}
