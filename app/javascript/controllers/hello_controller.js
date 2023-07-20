import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }
}



const options = document.querySelectorAll("#table td");



options.forEach((box) => {
  box.addEventListener("click", (event) => {
    // console.log(event);
    // console.log(box.className);
    if (box.className === "empty" && !checkIfWin("comp_clicked") && !checkIfWin("user_clicked")) {
      box.innerHTML = "0";
      box.classList.add("user_clicked");
      box.classList.remove("empty");

      let playerWins = checkIfWin("user_clicked")
      if (playerWins) {
        const winner = document.querySelector('.winner');
        winner.innerHTML = 'You win😎';
      } else if (document.querySelectorAll(".empty").length === 0) {
        const winner = document.querySelector('.winner');
        winner.innerHTML = 'Draw';
      } else {
        const optionsLeft = document.querySelectorAll(".empty")
        // console.log(optionsLeft)
        const random = Math.floor(Math.random() * optionsLeft.length);
        // console.log(random, optionsLeft[random]);
        const compOption = optionsLeft[random]
        compOption.innerHTML = "X";
        compOption.classList.add("comp_clicked");
        compOption.classList.remove("empty");

        let computerWins = checkIfWin("comp_clicked")
        if (computerWins) {
          const winner = document.querySelector('.winner');
          winner.innerHTML = 'Computer wins👊🏻';
        }
      }
    }
  });
});

const checkIfWin = (click) => {
  const boxes = document.querySelectorAll('td');
  if (boxes[0].className === click && boxes[1].className === click && boxes[2].className === click) {
    console.log("User wins");
    return true;
  }
  if (boxes[3].className === click && boxes[4].className === click && boxes[5].className === click) {
    console.log("User wins");
    return true;
  }
  if (boxes[6].className === click && boxes[7].className === click && boxes[8].className === click) {
    console.log("User wins");
    return true;
  }
  if (boxes[0].className === click && boxes[3].className === click && boxes[6].className === click) {
    console.log("User wins");
    return true;
  }
  if (boxes[1].className === click && boxes[4].className === click && boxes[7].className === click) {
    console.log("User wins");
    return true;
  }
  if (boxes[2].className === click && boxes[5].className === click && boxes[8].className === click) {
    console.log("User wins");
    return true;
  }
  if (boxes[0].className === click && boxes[4].className === click && boxes[8].className === click) {
    console.log("User wins");
    return true;
  }
  if (boxes[2].className === click && boxes[4].className === click && boxes[6].className === click) {
    console.log("User wins");
    return true;
  }
};
