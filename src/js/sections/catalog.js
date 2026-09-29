import { createMyElement } from './../common/functions';

const catalog = createMyElement('section', 'catalog');

catalog.innerHTML = `
<h1>
  Behind each of our cups hides an <span class="highlight">amazing surprise</span>
</h1>

<div class="categories">
  <button type="button" class="category active" data-cat-name="coffee"><span class="coffee-icon"></span>Coffee</button>
  <button type="button" class="category" data-cat-name="tea"><span class="tea-icon"></span>Tea</button>
  <button type="button" class="category" data-cat-name="dessert"><span class="dessert-icon"></span>Dessert</button>
</div>

<div class="product-grid"></div>

<button class="show-more" type="button"></button>
`;

export default catalog;