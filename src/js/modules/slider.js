
function onLoadSlider() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelector('.slides');
  const dots = document.querySelector('.slider-dots')?.children;

  const changeDot = (position) => {
    [...dots].forEach(dot => dot.classList.remove('dot--active'));
    dots[position].classList.add('dot--active');
  };

  const moveSlide = (position) => {
    [...slides.children].forEach(slide => {
      if (position === 0) {
        slide.style.transition = 'none';
        slide.style.transform = `translateX(${position}%)`;
      } else {
        slide.style.transition = 'transform .4s ease';
        slide.style.transform = `translateX(${position}%)`;
      }
    });
  }

  let currentPosition = 0;
  let currentDotPosition = 0;
  const changeSlideForward = (btn = null) => {
    btn?.classList.add('no-click');
    currentPosition -= 100;
    currentDotPosition += 1;
    if (currentDotPosition > 2) {
      currentDotPosition = 0;
    }
    moveSlide(currentPosition);
    changeDot(currentDotPosition);
    setTimeout(() => {
      currentPosition = 0;
      moveSlide(currentPosition);
      slides.append(slides.firstElementChild);
      btn?.classList.remove('no-click');
    }, 400);
  };

  const changeSlideBackward = (btn = null) => {
    btn?.classList.add('no-click');
    currentPosition += 100;
    currentDotPosition -= 1;
    if (currentDotPosition < 0) {
      currentDotPosition = 2;
    }
    moveSlide(currentPosition);
    changeDot(currentDotPosition);
    setTimeout(() => {
      currentPosition = 0;
      moveSlide(currentPosition);
      slides.prepend(slides.lastElementChild);
      btn?.classList.remove('no-click');
    }, 400);
  };

  const changeSlide = (e) => {
    if (e.target.closest('.slider-btn--left')) {
      changeSlideBackward(e.target.closest('.slider-btn--left'));
    }

    if (e.target.closest('.slider-btn--right')) {
      changeSlideForward(e.target.closest('.slider-btn--right'));
    }
  };

  slider?.addEventListener('click', changeSlide);

  let startX = 0;
  let currentX = 0;
  let diffX = 0;

  slider?.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
  });

  slider?.addEventListener('touchmove', (e) => {
      currentX = e.touches[0].clientX;
      diffX = startX - currentX;
  });

  slider?.addEventListener('touchend', () => {
    const isNoClick = document.querySelector('.no-click');
    const rightBtn = document.querySelector('.slider-btn--right');
    const leftBtn = document.querySelector('.slider-btn--left');
    if (diffX > 50 && !isNoClick) {
        changeSlideForward(rightBtn);
    } else if (diffX < -50 && !isNoClick) {
        changeSlideBackward(leftBtn);
    }
    startX = 0;
    diffX = 0;
  });
}

window.addEventListener('DOMContentLoaded', onLoadSlider);