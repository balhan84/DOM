console.log("document:>>", document);
console.dir(document);
console.log("document.body:>>", document.body);
console.log(
  'document.getElementsByTagName("h1"): > >',
  document.getElementsByTagName("h1")
);
console.log(
  'document.getElementsByTagName("section"): > >',
  document.getElementsByTagName("section")
);
console.log(
  'document.getElementById("root"): > >',
  document.getElementById("root")
);
const h1 = document.querySelector("h1");
console.log(h1);
const sectionEls = document.querySelectorAll(".news");
console.log(sectionEls);
console.log(sectionEls[0]);
console.log(sectionEls[1]);

const [section1, section2] = document.querySelectorAll(".news");
console.log(section1);

const root = document.querySelector("#root");
console.log(root);
