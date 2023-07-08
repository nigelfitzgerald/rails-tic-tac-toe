import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }
}



const options = document.querySelectorAll("#table td");



options.forEach((box) => {
  box.addEventListener("click", (event) => {
    console.log(event);
    console.log(box.className);
    if (box.classList.contains("empty")) {
      box.innerHTML = "0";
      box.classList.add("user_clicked");
      box.classList.remove("empty");
    }

    checkIfPlayerWins();
    if (checkIfPlayerWins()) {
      const header = document.querySelector('.header');
      header.insertAdjacentHTML('beforeend', '<p>You win😎</p>');
    }

    const optionsLeft = document.querySelectorAll(".empty")
    console.log(optionsLeft)
    const random = Math.floor(Math.random() * optionsLeft.length);
    console.log(random, optionsLeft[random]);
    const compOption = optionsLeft[random]
    compOption.innerHTML = "X";
    compOption.classList.add("comp_clicked");
    compOption.classList.remove("empty");
  });
});


const checkIfPlayerWins = () => {
  const boxes = document.querySelectorAll('td');
  if (boxes[0].classList.contains('user_clicked') && boxes[1].classList.contains('user_clicked') && boxes[2].classList.contains('user_clicked')) {
    console.log("User wins");
    return true;
  }
};
