let score = 0;
let hightScore = 0;
let lastScore;
let time = 8;
let redScore = 0;
let blueScore = 0;
let rgeenScore = 0;
let yellowScore = 0;
let lightgrayScore = 0;
let speedGame = 10;
let color = ["red", "blue", "green", "yellow", "lightgray", "#a80000"];
let timer;
let restartText = document.querySelector(".restartText");
let gameOverDesk = document.querySelector(".gameOverDesk");
let gameWindow = document.querySelector(".gameWindow");
let numberBestScoer = document.querySelector(".numberBestScoer");
let lasstScoerNumber = document.querySelector(".lasstScoerNumber");
let scoreNumber = document.querySelector(".numberScore");
let circleScoreNumber = document.querySelectorAll(".circleScoreNumber");
let incorrectChoice = document.querySelectorAll(".wrong");
//console.log(window.getComputedStyle(incorrectChoice[0]).getPropertyValue("opacity"))
let playbtn = document.querySelector(".playBtn");
playbtn.addEventListener("click", function() {
  playbtn.style.display = "none";
  play();
  gameOverDesk.style.display = "none";
})
function play() {
  scoreNumber.innerText = "0";
  score = 0;
  redScore = 0;
  blueScore = 0;
  rgeenScore = 0;
  yellowScore = 0;
  lightgrayScore = 0;
  for (let y = 0; y < 3; y++) {
    incorrectChoice[y].style.opacity = 1;
  }
  for (let i = 0; i < 5; i++) {
    circleScoreNumber[i].innerText = "0";
  }
  timer = setInterval(function() {
    let randomColor = Math.floor(Math.random() * 6);
    //console.log(randomColor)
    let circl = document.createElement("button");
    circl.classList.add("circleForm");
    circl.classList.add("createdCircle");
    circl.style.background = color[randomColor];
    let randomPosition = Math.floor(Math.random() * (-10 - -780));
    circl.style.bottom = -40 + "px";
    circl.style.right = randomPosition + "px";
    gameWindow.appendChild(circl);
    setTimeout(function() {
      circl.style.transform = "translatey(-600px)";
    }, 1000)
    setTimeout(function() {
      circl.remove();
    }, 9000)
    circl.addEventListener("click", function() {
      if (randomColor == 5) {
        if (window.getComputedStyle(incorrectChoice[0]).getPropertyValue("opacity") == 1) {
          incorrectChoice[0].style.opacity = 0.2;
        } else if (window.getComputedStyle(incorrectChoice[1]).getPropertyValue("opacity") == 1) {
          incorrectChoice[1].style.opacity = 0.2;
        } else if (window.getComputedStyle(incorrectChoice[2]).getPropertyValue("opacity") == 1) {
          incorrectChoice[2].style.opacity = 0.2;
          gameOver();
        }

      } else {

        score++;
        scoreNumber.innerText = score;
        if (randomColor == 0) {
          redScore++;
          circleScoreNumber[randomColor].innerText = redScore;
        } else if (randomColor == 1) {
          blueScore++;
          circleScoreNumber[randomColor].innerText = blueScore;
        } else if (randomColor == 2) {
          rgeenScore++;
          circleScoreNumber[randomColor].innerText = rgeenScore;
        } else if (randomColor == 3) {
          yellowScore++;
          circleScoreNumber[randomColor].innerText = yellowScore;
        } else {
          lightgrayScore++;
          circleScoreNumber[randomColor].innerText = lightgrayScore;
        }
      }
      circl.remove();
    })
  }, 1000)
  function gameOver() {
    clearInterval(timer);
    time = 8;
    gameOverDesk.style.display = "block";
    restartText.style.display = "block"
    restartText.innerText = "you can try again through: 8s"
    reverseTime =setInterval(function() {
      time--;
      restartText.innerText = "you can try again through: " + time + "s"
      if (time == 0) {
      restartText.style.display = "none";
        clearInterval(reverseTime);
    }
    }, 1000)

    lastScore = score;
    //createdCircle.remove();
    lasstScoerNumber.innerText = lastScore;
    if (hightScore < score) {
      hightScore = score;
      numberBestScoer.innerText = hightScore;
    }
    setTimeout(function() {
      playbtn.innerText = "restart";
      playbtn.style.display = "block";
    }, 8000)

  }
}
