var images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg"
  ];
  function getRandomImage() {
    var index = Math.floor(Math.random() * images.length);
    return images[index];
  }
  function changeBackground() {
    var image = getRandomImage();
    document.body.style.backgroundImage = "url('" + image + "')";
  }

changeBackground();
  