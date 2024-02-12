// Open/close burger menu
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nav__burger-btn").addEventListener("click", function() {
      document.querySelector(".nav").classList.toggle("open")
    })
});


// Closing the menu by clicking in the area around

document.getElementById("nav-links__list").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.getElementById("nav__burger-btn").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  document.querySelector(".nav").classList.remove("open")
});


// // Timetraker

function addZero(currentNumber) {
  if(currentNumber < 10) {
    return "0" + currentNumber;
  } else {
    return currentNumber;
  }
}

function getCurrentTime() {
  const date = new Date();

  const fullTime =
    addZero(date.getHours()) +
    " : " +
    addZero(date.getMinutes()) +
    " : " +
    addZero(date.getSeconds());

  console.log(fullTime);
  return fullTime;

}

const timeTracker = document.querySelector(".timetracker__time");

setInterval(() => {
  timeTracker.innerHTML = getCurrentTime();
  }, 1000);