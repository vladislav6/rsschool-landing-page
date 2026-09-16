import { createMyElement } from './../common/functions';

const hero = createMyElement('section', 'hero');

hero.innerHTML = `
  <div class="hero-overlay">
    <div class="hero-block">
      <h1>
        <span class="highlight">Enjoy</span> premium coffee at our charming cafe
      </h1>
      <p>
        With its inviting atmosphere and delicious coffee options, the Coffee
        House Resource is a popular destination for coffee lovers and those
        seeking a warm and inviting space to enjoy their favorite beverage.
      </p>
      <button>Menu</button>
    </div>
  </div>
`;

export default hero;
