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
    box.classList.add("clicked");
    box.disabled = true
    box.nextElementSibling.innerHTML = "X"
  })
});
