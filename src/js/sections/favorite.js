import { createMyElement } from '../common/functions';

const slider = createMyElement('section', '', 'favorite');

slider.innerHTML = `
<h2>
  Choose your <span class="highlight">favorite</span> coffee
</h2>
<div class="slider">
  <button class="slider-btn slider-btn--left" aria-label="Previous coffee"></button>

  <div class="slide">
    <div class="coffee-image">
      <img
        src="src/assets/slider/coffee-slider-1.png"
        alt="S'mores Frappuccino"
      >
    </div>
    <div class="coffee-info">
      <h3>S'mores Frappuccino</h3>

      <p class="desc">
        This new drink takes an espresso and mixes it with brown
        sugar and cinnamon before being topped with oat milk.
      </p>

      <p class="price">$5.50</p>
    </div>
  </div>

  <button class="slider-btn slider-btn--right" aria-label="Next coffee"></button>
</div>
<div class="slider-dots">
  <span class="dot dot--active"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>
`;
  
export default slider;