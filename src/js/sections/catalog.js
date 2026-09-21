import { createMyElement } from './../common/functions';

const catalog = createMyElement('section', 'catalog');

catalog.innerHTML = `
<h1>
  Behind each of our cups hides an <span class="highlight">amazing surprise</span>
</h1>

<div class="categories">
  <button type="button" class="category active"><span class="coffee-icon"></span>Coffee</button>
  <button type="button" class="category"><span class="tea-icon"></span>Tea</button>
  <button type="button" class="category"><span class="dessert-icon"></span>Dessert</button>
</div>

<div class="coffee-grid">
  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-1.png" alt="Irish coffee">
    </div>
    <div class="coffee-card__content">
      <h2>Irish coffee</h2>
      <p class="description">Fragrant black coffee with Jameson Irish whiskey and whipped milk</p>
      <p class="price">$7.00</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-2.png" alt="Kahlua coffee">
    </div>
    <div class="coffee-card__content">
      <h2>Kahlua coffee</h2>
      <p class="description">Classic coffee with milk and Kahlua liqueur under a cap of frothed milk</p>
      <p class="price">$7.00</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-3.png" alt="Honey raf">
    </div>
    <div class="coffee-card__content">
      <h2>Honey raf</h2>
      <p class="description">Espresso with frothed milk, cream and aromatic honey</p>
      <p class="price">$5.50</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-4.png" alt="Ice cappuccino">
    </div>
    <div class="coffee-card__content">
      <h2>Ice cappuccino</h2>
      <p class="description">Cappuccino with soft thick foam in summer version with ice</p>
      <p class="price">$5.00</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-5.png" alt="Espresso">
    </div>
    <div class="coffee-card__content">
      <h2>Espresso</h2>
      <p class="description">Classic black coffee</p>
      <p class="price">$4.50</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-6.png" alt="Latte">
    </div>
    <div class="coffee-card__content">
      <h2>Latte</h2>
      <p class="description">Espresso coffee with the addition of steamed milk and dense milk foam</p>
      <p class="price">$5.50</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-7.png" alt="Latte macchiato">
    </div>
    <div class="coffee-card__content">
      <h2>Latte macchiato</h2>
      <p class="description">Espresso with frothed milk and chocolate</p>
      <p class="price">$5.50</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-8.png" alt="Coffee with cognac">
    </div>
    <div class="coffee-card__content">
      <h2>Coffee with cognac</h2>
      <p class="description">Fragrant black coffee with cognac and whipped cream</p>
      <p class="price">$6.50</p>
    </div>
  </article>
</div>

<button class="show-more" type="button"></button>
`;

export default catalog;