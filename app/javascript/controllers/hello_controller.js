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
    box.innerHTML = "0";
    box.classList.add("user_clicked");
    box.disabled = true;

    // box.parentElement.rowIndex

    box.nextElementSibling.innerHTML = "X";
    box.nextElementSibling.classList.add("comp_clicked");
    box.nextElementSibling.disabled = true;
  })
});