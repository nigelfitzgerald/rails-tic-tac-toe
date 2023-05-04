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
    if (box.classList.contains("empty")) {
      box.innerHTML = "0";
      box.classList.add("user_clicked");
      box.classList.remove("empty");
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



// const months = ["January", "February", "March", "April", "May", "June", "July"];

// const random = Math.floor(Math.random() * months.length);
// console.log(random, months[random]);
