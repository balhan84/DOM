"use strict";

const innerDivEl = document.querySelector(".innerDiv");
const outerDivEl = document.querySelector(".outerDiv");

//сплиття по дефолту - inner outer body
innerDivEl.onclick = handler;
outerDivEl.onclick = handler;
document.body.onclick = handler;

innerDivEl.addEventListener("click", handler, { capture: true });
outerDivEl.addEventListener("click", handler, { capture: true });
document.body.addEventListener("click", handler, { capture: true });

function handler(e) {
  console.log("this", this);
  //   console.log("e.target", e.target);
  //   console.log("e.currentTarget", e.currentTarget);
}
let clickCounter = 0;
document.body = addEventListener("click", clickHandler, { capture: true });

function clickHandler(e) {
  clickCounter++;
  console.log("clickCounter", clickCounter);
  //   e.stopPropagation();
}
