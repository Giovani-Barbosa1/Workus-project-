function showSlide(slideIndex) {
    var slides = document.getElementsByClassName('carousel-slide');
    var buttons = document.getElementsByClassName('carousel-button');

    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
      buttons[i].classList.remove('selected');
    }

    slides[slideIndex - 1].classList.add('active');
    buttons[slideIndex - 1].classList.add('selected');
  }