const slides = [
  {
    src: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg",
    alt: "landscape1",
  },
  {
    src: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
    alt: "landscape2",
  },
  {
    src: "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg",
    alt: "landscape3",
  },
  {
    src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    alt: "landscape4",
  },
];

// MVVM - Model- View - ViewModel (MVC, MVP)

// // model
// class Slider {
//   constructor(slides, currentIndex) {
//     this.slides = slides;
//     this.currentIndex = currentIndex;
//   }
//   decIndex() {
//     const {
//       currentIndex,
//       slides: { length },
//     } = this;
//     this.currentIndex = (currentIndex - 1 + length) % length;
//   }
//   incIndex() {
//     const {
//       currentIndex,
//       slides: { length },
//     } = this;
//     this.currentIndex = (currentIndex + 1) % length;
//   }
// }

// стан
// let currentSlideIndex = 0;

//ViewModel

const slider = new Slider(slides, 0);

//встановити як початкове нульове зображення

const sliderImg = document.querySelector(".sliderImg");
updateSlider(slider.currentIndex);
// sliderImg.src = slides[currentSlideIndex].src;
// sliderImg.alt = slides[currentSlideIndex].alt;

//при натисканні на prev відобразити попереднє зображення

const [prevBtn, nextBtn] = document.querySelectorAll("button");

prevBtn.onclick = () => {
  //   if (currentSlideIndex > 0) {
  //     currentSlideIndex--;
  //   } else {
  //     currentSlideIndex = slides.length - 1;
  //   }
  //   currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  slider.decIndex();
  updateSlider(slider.currentIndex);
};

//при натисканні на next відобразити наступне зображення

nextBtn.onclick = () => {
  //   if (currentSlideIndex < slides.length - 1) {
  //     currentSlideIndex++;
  //   } else {
  //     currentSlideIndex = 0;
  //   }

  //   currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  slider.incIndex();
  updateSlider(slider.currentIndex);
};

function updateSlider(currentIndex) {
  sliderImg.src = slides[currentIndex].src;
  sliderImg.alt = slides[currentIndex].alt;
}
