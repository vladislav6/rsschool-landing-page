import { productFetch, cleanDOM, createMyElement } from "../common/functions";
import { showMore } from "./showMore";

function onProductsLoad() {
  const categories = document.querySelector('.categories');
  const coffeeGrid = document.querySelector('.product-grid');
  const products = productFetch('/products.json');

  const getProductsByCategory = (products, category) =>
    products.filter(product => product.category === category);

  const getCards = (products) => {
    const fragment = document.createDocumentFragment();
    products.forEach((prod, id) => {
      const article = createMyElement('article', 'product-card card');
      const divImg = createMyElement('div', 'product-card__img');
      const img = createMyElement('img');
      img.src = `/images/catalog/${prod.category}-${id + 1}.png`;
      img.alt = prod.name;
      const divInfo = createMyElement('div', 'product-card__content');
      const title = createMyElement('h2', '', '', prod.name);
      const desc = createMyElement('p', 'description', '', prod.description);
      const price = createMyElement('p', 'price', '', prod.price);

      divImg.append(img);
      divInfo.append(title, desc, price);
      article.append(divImg, divInfo);
      fragment.append(article);
    });

    return fragment;
  };

  const renderCards = (cat) => {
    products.then(products => {
      const prodByCat = getProductsByCategory(products, cat);
      const fragment = getCards(prodByCat);
      cleanDOM(coffeeGrid);
      coffeeGrid.append(fragment);
      showMore(prodByCat);
    });
  };

  const getProduct = (e) => {
    if (e.target.closest('.category')) {
      const catBtn = e.target.closest('.category');
      [...categories.children].forEach(cat => cat.classList.remove('active'));
      catBtn.classList.add('active');
      const cat = catBtn.dataset.catName;
      renderCards(cat);
    }
  };

  categories?.addEventListener('click', getProduct);
  if (coffeeGrid) {
    renderCards('coffee');
  }
}

window.addEventListener('DOMContentLoaded', onProductsLoad);