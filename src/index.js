import "./styles.css";
const ball = document.getElementById("ball");
const sc = document.getElementById("score");
let leftPosition = 0;
let topPosition = 0;
const step = 10;
let score = 0;
document.addEventListener(
  "keydown",
  (event) => {
    switch (event.key) {
      case "a":
        leftPosition -= step;
        score++;
        break;
      case "d":
        leftPosition += step;
        score++;
        break;
      case "w":
        topPosition -= step;
        score++;
        break;
      case "s":
        topPosition += step;
        score++;
        break;
      default:
        score -= 50;
        console.log("wrong key pressed You loss score by 50");
    }
    ball.style.left = `${leftPosition}px`;
    ball.style.top = `${topPosition}px`;
    sc.innerHTML = score;
  },
  false
);
