let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/1.jpg") {
    myImage.setAttribute("src", "images/2.jpg");
  } if (mySrc === "images/2.jpg") {
    myImage.setAttribute("src", "images/3.jpg");
  }if (mySrc === "images/3.jpg") {
    myImage.setAttribute("src", "images/4.jpg");
  }if (mySrc === "images/4.jpg") {
    myImage.setAttribute("src", "images/5.jpg");
  }if (mySrc === "images/5.jpg") {
    myImage.setAttribute("src", "images/6.jpg");
  }if (mySrc === "images/6.jpg") {
    myImage.setAttribute("src", "images/7.jpg");
  }if (mySrc === "images/7.jpg") {
    myImage.setAttribute("src", "images/8.jpg");
  }if (mySrc === "images/8.jpg") {
    myImage.setAttribute("src", "images/1.jpg");
}
};
