function changeHeaderTextNode() {
  let myNewHeading = document.getElementsByTagName("h1")[0];
  myNewHeading.innerText = "Amazing SmartPhone";
}
changeHeaderTextNode();

function changeBackgroundColorNode(color) {
  document.body.style.background = color;
}
changeBackgroundColorNode("aliceblue");

function changeFooterNote() {
  let myFooter = document.getElementsByTagName("footer")[0];
  myFooter.innerText = "Fake Copyright";
}
changeFooterNote();

function addCSSClasstoLink() {
  let newClass = document.getElementsByTagName("a")[0];
  newClass.classList.add("buy-me");
}
addCSSClasstoLink();
