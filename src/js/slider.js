document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const slider = document.getElementById('slider');
  const totalSlides = document.querySelectorAll('#slider > div').length;
  let currentIndex = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextButton.addEventListener('click', function() {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateSlider();
    } else {
      currentIndex = 0;
      updateSlider();
    }
  });
});
