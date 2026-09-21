import { createMyElement } from './../common/functions';

const catalog = createMyElement('section', 'catalog');

catalog.innerHTML = `
<h2>
  Behind each of our cups hides an <span class="highlight">amazing surprise</span>
</h2>

<div class="categories">
  <button type="button" class="category active"><span class="coffee-icon"></span>Coffee</button>
  <button type="button" class="category"><span class="tea-icon"></span>Tea</button>
  <button type="button" class="category"><span class="dessert-icon"></span>Dessert</button>
</div>

<div class="coffee-grid">
  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-1.png" alt="Coffee with cognac">
    </div>
    <div class="coffee-card__content">
      <h3>Irish coffee</h3>
      <p class="description">Fragrant black coffee with Jameson Irish whiskey and whipped milk</p>
      <p class="price">$7.00</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-2.png" alt="Coffee with cognac">
    </div>
    <div class="coffee-card__content">
      <h3>Kahlua coffee</h3>
      <p class="description">Classic coffee with milk and Kahlua liqueur under a cap of frothed milk</p>
      <p class="price">$7.00</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-3.png" alt="Coffee with cognac">
    </div>
    <div class="coffee-card__content">
      <h3>Honey raf</h3>
      <p class="description">Espresso with frothed milk, cream and aromatic honey</p>
      <p class="price">$5.50</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-4.png" alt="Coffee with cognac">
    </div>
    <div class="coffee-card__content">
      <h3>Ice cappuccino</h3>
      <p class="description">Cappuccino with soft thick foam in summer version with ice</p>
      <p class="price">$5.00</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-5.png" alt="Coffee with cognac">
    </div>
    <div class="coffee-card__content">
      <h3>Espresso</h3>
      <p class="description">Classic black coffee</p>
      <p class="price">$4.50</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-6.png" alt="Coffee with cognac">
    </div>
    <div class="coffee-card__content">
      <h3>Latte</h3>
      <p class="description">Espresso coffee with the addition of steamed milk and dense milk foam</p>
      <p class="price">$5.50</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-7.png" alt="Coffee with cognac">
    </div>
    <div class="coffee-card__content">
      <h3>Latte macchiato</h3>
      <p class="description">Espresso with frothed milk and chocolate</p>
      <p class="price">$5.50</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-8.png" alt="Coffee with cognac">
    </div>
    <div class="coffee-card__content">
      <h3>Coffee with cognac</h3>
      <p class="description">Fragrant black coffee with cognac and whipped cream</p>
      <p class="price">$6.50</p>
    </div>
  </article>
</div>

<button class="show-more" type="button"></button>
`;

export default catalog;