let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-img");
function showSlide(dir) {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + dir + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}
slides.forEach((img, i) => (img.style.display = i === 0 ? "block" : "none"));
