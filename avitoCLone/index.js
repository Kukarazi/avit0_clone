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
let storyData = [
  {
    imgUrl: "public/images/carousel_capybara101.png",
    imgAlt: "Man hugs capybara",
    title: "Capybaras 101. Why is it so chill?",
  },
  {
    imgUrl: "public/images/carousel_car.png",
    imgAlt: "Pontiac trans-am",
    title: "Brutal classics. Beauty & the beast.",
  },
  {
    imgUrl: "public/images/carousel_chess.png",
    imgAlt: "Chess king figure pic.",
    title: "Why chess is the king of all games?",
  },
  {
    imgUrl: "public/images/carousel_distance_work.png",
    imgAlt: "Notebook pic.",
    title: "Distant work options",
  },
  {
    imgUrl: "public/images/carousel_dreamHouse.png",
    imgAlt: "Dream house",
    title: "Building a dream house",
  },
  {
    imgUrl: "public/images/carousel_everest101.png",
    imgAlt: "Everest pic.",
    title: "Everest facts",
  },
  {
    imgUrl: "public/images/carousel_flatOrHotel.png",
    imgAlt: "Room pic.",
    title: "Aparts or Hotel?",
  },
  {
    imgUrl: "public/images/carousel_happyBirthDay.png",
    imgAlt: "B-day cake pic.",
    title: "Where to celebrate?",
  },
  {
    imgUrl: "public/images/carousel_iphoneQuiz.png",
    imgAlt: "Iphone 14 pic.",
    title: "Iphone lottery & more",
  },
  {
    imgUrl: "public/images/carousel_loft.png",
    imgAlt: "Loft chair pic.",
    title: "Loft & design",
  },
  {
    imgUrl: "public/images/carousel_reliable4x4.png",
    imgAlt: "Jeep wagoneer 1987",
    title: "Most reliable off-road cars",
  },
];
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
let createStory = function (product) {
  let carouselItem = makeElement("div", "story-previewer-circle"); // first outer div

  let storyBlock = makeElement("div", "story-previewer-block"); // second inner div ( child of outer div)
  carouselItem.appendChild(storyBlock);

  let image = makeElement("img", "story-previewer-image"); // image ( child of inner div)
  image.src = product.imgUrl;
  image.alt = product.imgAlt;
  storyBlock.appendChild(image);

  let title = makeElement("div", "story-previewer-title", product.title); // text under the image ( child of outer div)
  carouselItem.appendChild(title);

  return carouselItem; // returning ready carousel story item
};

let carousel = document.querySelector(".carousel-list");
// let storyItem = createStory();
// carousel.appendChild(storyItem); // attaching ready item to carousel list

for (let i = 0; i < storyData.length; i++) {
  let storyItem = createStory(storyData[i]);
  carousel.appendChild(storyItem);
}
////CAROUSEL SCROLL////
let slidesContainer = document.querySelector(".carousel-content");
let slide = document.querySelector(".story-previewer-circle");
let prevButton = document.getElementById("carousel-scroll-left");
let nextButton = document.getElementById("carousel-scroll-right");
//Adding listener to right butoon & appeareance of left button on click
nextButton.addEventListener("click", () => {
  prevButton.style.display = "block";
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
  console.log("Next-Button " + slide.clientWidth);
});
//Adding listener to left button & dissapeareance of left button when scroll
//bar is fully back to start
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
  slidesContainer.scrollLeft;
  if (slidesContainer.scrollLeft < 100) {
    prevButton.style.display = "none";
  }
});
