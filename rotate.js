var i = 0;
var min = 0;
var max = 3;
var images = [
  "https://i.picsum.photos/id/666/800/200.jpg",
  "https://i.picsum.photos/id/420/800/200.jpg",
  "https://i.picsum.photos/id/888/800/200.jpg"
];
var newURL = [
  "https://www.google.com",
  "https://www.facebook.com",
  "https://www.reddit.com"
];
var time = 3000; // Time Between Switch

// Change Image
function changeImg() {
  document.slide.src = images[i];
  document.getElementById("rotateURL").href =
    newURL[i];

  i =
    Math.floor(Math.random() * (+max - +min)) +
    +min;

  // Run function every x seconds
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;
