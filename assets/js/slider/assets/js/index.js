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
const sliderImg = document.querySelector(".sliderImg");
const [prevBtn, nextBtn] = document.querySelectorAll("button");
function updateSlider(currentIndex) {
  sliderImg.src = slides[currentIndex].src;
  sliderImg.alt = slides[currentIndex].alt;
}

function sliderError() {
  sliderImg.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAgVBMVEXd3d3////e3t709PT8/PxTU1Pl5eVISEhSUlKbm5u+vr5OTk7h4eHa2tqoqKjo6OjS0tJCQkKzs7Pu7u6BgYFzc3OwsLBFRUWGhoZ+fn5qampgYGCioqLDw8O5ubmpqalcXFzKyso9PT2UlJSVlZU0NDR3d3cvLy83NzceHh4oKCg44IHMAAAH90lEQVR4nO2aC3urKBCGBfEOUUO84SWxpvbs/v8fuIO3mLbby9nt00OfeZsYg8TO5wwwIpaFIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiC/Fio5ruN+B3om3y3df+FN403Wtm7GKnunXgzOR4p5W9hpjRtsUjeQXy3lb+FcIPC8aPIj/w7IgcKoDRy0kaK6QoY5TeqhWkVWsMLtDI/DaSgXBgWj1qY50QOcHGe4zu+f3G8gysAs6TRWZjjeGnh3VF4kVYWFd6vxnbjmFPLqLZGLd3GnGgsy+q0pywjkFXr0iA/n8+JgW0MPOa3ErxyB4c4jDLbde3yEfzZu8IoYdYsLAqf280t8JiXxVTEpQfdZk/hIkDo6q0R3ITdl9NZmBQgrLg4UWIJqAHqTelC3hNmWXH5WKRpIl3puoJTUyJyJ2zyxeqQTZjg4SHPz6eqGgeqy80TdscWirArY+nWaZQqU8JQcydsl+5uwnTwCUvU8E1xQY3p9ffCdJq/mk3XXlHvgrQ68j0V6xrfau7H2YTpLITqzEmX0k3Y3PQ4CIsK8JjW+N0mf4ybMN5DZugNri7VvTok9tHcxvQbbl9oFzkXL4jNULYX5kWRV052a49Bzr90HrrtuZy7bQG5Y+B+t8kfYycsgbT3JkyAsEILE1P2C2831BUMFAaheBPGhU6Cda44E7tctpHjm+kx30k3YdSD2zHVduFCF7YNeCwaDGxjoOQWihRk+g4kU6l+p14Bd2y+4xSNIf39s1AsFofASAy9ov/iltrMNhZtbQzKuQ7FZ6qcyExhDw/F40nOwrhIH6YY3KFnCwzsPGgSBM21W5oQFQF8bYKNJmgGCE4DPUaplDLe+jwh9Ve5ADux3U/CjOs8qJhYyiHznW6Zl0K9MXWAnu8zrVt6T+9n3ECYHsGNE/b2sKvlGuoxFIbCvhcUZrawqcvnYr5pnp7RzjMe5guzFiWb/4TYZklNFjYX0VXgPNE4TeZY5gvjbszdG3yakfsBwmhyODTAYeacUJD2E4S5/aW4PV73Li3/IaHI2xpyXWdZFeHU/fIAhpqa3Yulx3D7Wgta13vUPedLT2msMGta8gAe83ZrPi49n1dCmOwxLoISyI/HY9cdZ/KyPJXBNAIYKww8MxaRpwTnLuVrZ69SPxqnZ8/GCqNUnHwnUokOvGVSgAoFYiqhJzqMFQZaRi8CYRySj5VEeZE3Tl2mocIs3aOXF1WPiR6Rl96fJuNFXcrpeYuxwiB1SpKk1+sTtye2wup7XaQL3NC8KW4/jOcUngrKpwa2hiL0JPNNC9TsTJ2lopNjhLWfeNOP/dwp9xBua2IoxnrFALxc6Of5bpWw/g6jtj4Ut55xwvygO+bwt7ymjwn4mEtg2wW+aXP3U9I7Pyladv39KtO1XL8MEQYdxrzC1PefP+R7Bf/WK/7xi4/mFabzHYr/HlrZ8nzsz9cFoZi+sn77X0lNCUW4sWzOh49yPjehGc/H9HAM/fsnMGIxN6Xzspvl5v89LJDF//huY2JevvxhU7kwwl8IgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAI8nMQPxTL/qFY5IeCwt6E/U6Nl0UvSt4/77/yGWFs+pv/HWPTJ5t32HZsKplL12/LlrHlt8tPl4K52rx7q0J21bbTfJGwRQlL8kXRVjKLYZuyRaN9kPPx9eBqG9sE7FyyKHu2e3/4i4QtluclWUy3G5sM7qJrqXOVm8VSuS8Munf0NSfHp7R4YPbQQUkJG71HDlFmE5KMMbHLFiqLGs7a67KvEDYZJCU5nmzJbJvYtlCWfUlsKGTMho1+OYLpT12TZ5RJfTVsCbXjqZKt99foGn81+rx9xaqnA2PjI8TC+JST/iIDRbhKiMz+Bp1y+EsSS4nP6Pq4sOkS5xcVh97o8aAk1+D0WA1PqmvH8SqrumqdjF7/zpKmVo0d1FU38mAA++NMlbJSdZg8ZFWllPZ1os8WhgEByaeEhV3DYHMgrD2eyXgmsmBllth2f9AOPI6SVVXyRR7TpgyDS7qMXa/5QILAVjaJpFRV4/VjSIaSM+LY4iLjsbmAQ7PspK9HUxLZ1RBKrc+uAYkScNKT1KcMtcf6EvZBGCHHA3zNz0SFhHhJGqiBkKYjYUkqu/cCFXyNME18LGlXkvMwCZMgrJA0y/vErQRYXybMt9uM2MM4QgRlp0xfjhPYGwwQWuGFNEdS93AomdpeGDBoReATEAY1wVmTsAw85jUDsQrtLfLLqx6y4Eqs9IuEgRHcLs9wAQ9lOMpskLVLPBGDs3p3FETIIGCea0WxpbrIle3oqlwbrViSpHY3tvUqbOn0WvCYUNp53VRRCzseSeLIpmoV6XwQ1pHYlSo5nkh++RJh00h0LhQLB5IHTDnlgY11nKctz35d5SBIV6iYlBerj6KWtF7dlrGdJZXLhodS/5KLjOQdGZN1lKgfHhQbQtid9rYNORdZTIK0ljZ8zeCflzacZLoC/7+wXc/Nnhe8Xu2V0tuW3YZn9nw0e+23XziO3czaBlDG1uH3NmRvo+wmYh3Ll2GZ7Y+QdXBfsxZyq8Tuz/fJ5OPjoUiWJOMuQdonVGwbfVcL14xkzavuXEZ2PyXr+L+lYNvR7Ux3nv0/he0t2dIQsjPkuUM3Natn9znYXt+qfMtEb3J2jv1kOP4D7V6wPiDisTwAAAAASUVORK5CYII=";
  sliderImg.alt = "unavailable image";
}

sliderImg.onerror = () => {
  sliderError();
};

try {
  const slider = new Slider(slides, 0);

  //встановити як початкове нульове зображення

  updateSlider(slider.currentIndex);
  // sliderImg.src = slides[currentSlideIndex].src;
  // sliderImg.alt = slides[currentSlideIndex].alt;

  function changeSliderHandler(direction = "next") {
    return () => {
      slider[direction === "prev" ? "decIndex" : "incIndex"]();
      updateSlider(slider.currentIndex);
    };
  }

  //при натисканні на prev відобразити попереднє зображення

  prevBtn.onclick =
    //   if (currentSlideIndex > 0) {
    //     currentSlideIndex--;
    //   } else {
    //     currentSlideIndex = slides.length - 1;
    //   }
    //   currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    // slider.decIndex();
    // updateSlider(slider.currentIndex);
    changeSliderHandler("prev");

  //при натисканні на next відобразити наступне зображення

  nextBtn.onclick =
    //   if (currentSlideIndex < slides.length - 1) {
    //     currentSlideIndex++;
    //   } else {
    //     currentSlideIndex = 0;
    //   }

    //   currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    // slider.incIndex();
    // updateSlider(slider.currentIndex);
    changeSliderHandler("next");
} catch (err) {
  sliderError();
}
