//Write a function to change the h1 text to something else
function changeHeaderTextNode() {
  let myNewHeading = document.getElementsByTagName("h1")[0];
  myNewHeading.innerText = "Amazing SmartPhone";
}
changeHeaderTextNode();
//Write a function to change the page background color
function changeBackgroundColorNode(color) {
  document.body.style.background = color;
}
changeBackgroundColorNode("aliceblue");

//Write a function to change the footer address with a fake one

function changeFooterNote() {
  let myFooter = document.getElementsByTagName("footer")[0];
  myFooter.innerText = "Fake Copyright";
}
changeFooterNote();
//Write a function to add a CSS class to every Amazon link
function addCSSClasstoLink() {
  let newClass = document.querySelectorAll("a");
  for (let i = 0; i < newClass.length; i++) {
    newClass[i].classList.add("link-class");
  }
}
addCSSClasstoLink();
//Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

function toggleImagesClass() {
  let images = document.querySelectorAll("img");
  for (let i = 0; i < images.length; i++) {
    const singleImg = images[i];
    singleImg.classList.toggle("hidden");
  }
}
toggleImagesClass();

//Write a function to color the price of the products in a different one every time it's invoked
function getRandomColor() {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);

  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
//getRandomColor();

function setRandomColor() {
  let randomColor = getRandomColor();
  let prices = document.querySelectorAll(".price");
  for (let i = 0; i < prices.length; i++) {
    let singlePrice = prices[i];
    singlePrice.style.color = randomColor();
  }
}
setRandomColor();
