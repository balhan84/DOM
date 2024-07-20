"use strict";

const task1El = document.querySelector("#task1");

task1El.addEventListener("click", doneTaskHandler);

function doneTaskHandler(e) {
  //   this.style.textDecoration = "line-through";
  //   this.className = "doneTask";
  this.classList.toggle("doneTask");
  //add remove toggle replace

  //   this.classList.replace("redTask", "greenTask");
}
