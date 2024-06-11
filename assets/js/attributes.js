const h1 = document.querySelector("h1");
h1.title = "It's heading";

h1.style.backgroundColor = "green";
h1.style.color = "yellow";

// h1.hidden = true;

const signIdBtn = document.querySelector("#signup");
// alert(signIdBtn.id);

const [section1] = document.querySelectorAll(".news");
section1.setAttribute("title", "Section");
section1.setAttribute(
  "style",
  "border: 1px solid red; background-color:lightblue"
);
// section1.setAttribute("hidden", "hidden");

console.log(section1.getAttribute("style"));

h1.textContent = "New Head";

section1.innerHTML = "<span>New element</span>";

const news = {
  title: "News title",
  body: "Some news body",
};

// const newsTitleEl = document.querySelector("#newsTitle");
// newsTitleEl.textContent = news.title;

// const newsBodyEl = document.querySelector("#newsBody");
// newsBodyEl.textContent = news.body;

const article = document.querySelector("#newsItem");
article.innerHTML = `
 <h2>${news.title}</h2> 
 <p>${news.body}</p>"
`;

const imgAttr = {
  src: "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg",
  alt: "cat",
};

const catImgEl = document.querySelector("#catImg");
catImgEl.src = imgAttr.src;
catImgEl.alt = imgAttr.alt;
catImgEl.style.width = "300px";

catImgEl.onmouseenter = (e) => {
  catImgEl.style.width = "350px";
};

catImgEl.onmouseleave = (e) => {
  catImgEl.style.width = "300px";
};
