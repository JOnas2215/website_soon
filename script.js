// Loadingscreen
var loadingtime = setInterval(function() {
  $(".loader").fadeOut("slow");
  clearInterval(loadingtime);
}, (Math.random() * 1000));

// Code for countdown timer
var targetDate = new Date("2023-07-02");


var countdown = setInterval(function() {
  var currentDate = new Date().getTime();
  var timeLeft = targetDate - currentDate;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + " days " + hours + "h "
    + minutes + "m " + seconds + "s ";

  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "SOON!";
  }
}, 50);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Code for title animation
let interval = null;
const space = " ";

document.getElementById("title").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
        // Check if the letter is a space to make sure it doesn't have the animation
        else if (letter==" ") {
            return space;
        }
      
        return letters[Math.floor(Math.random() * 26)] 
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1/3;
  }, 30);
}
