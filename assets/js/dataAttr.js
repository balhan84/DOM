"use strict";

const loadingButtons = document.querySelectorAll("button");
console.log("loadingButtons[0]:>>", loadingButtons[0].dataset.host);
console.log("loadingButtons[1]:>>", loadingButtons[1].dataset.host);

loadingButtons.forEach((btn) => {
  btn.onclick = loadResource;
});

function loadResource() {
  console.log(`Load resource from ${this.dataset.host}`);
  console.log(`Load resource by ${this.dataset.userName}`);
}
