// model
class Slider {
  constructor(slides, currentIndex) {
    this.slides = slides;
    this.currentIndex = currentIndex;
  }
  decIndex() {
    const {
      currentIndex,
      slides: { length },
    } = this;
    this.currentIndex = (currentIndex - 1 + length) % length;
  }
  incIndex() {
    const {
      currentIndex,
      slides: { length },
    } = this;
    this.currentIndex = (currentIndex + 1) % length;
  }
}
