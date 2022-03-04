var myImage = document.querySelector('img');
var textAfterImg = document.querySelector ('p')

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Khazix_0.jpg') {
      myImage.setAttribute ('src','images/rengar.jpg');
    } else {
      myImage.setAttribute ('src','images/Khazix_0.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
function setUserName() {
    var myName = prompt('Как тебя зовут?');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + ', Гайды, билды, сборки для тебя';
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ', Гайды, билды, сборки для тебя';
  }
  myButton.onclick = function() {
    setUserName();
  }