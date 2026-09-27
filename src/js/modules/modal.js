import { productFetch } from "../common/functions";
import { drawModal } from "../sections/modal";
import { body } from "../common/common";

export function modal(e) {
  if (!e.target.closest('.product-card')) {
    return;
  }
  body.classList.add('scroll-lock');
  const products = productFetch('/products.json');
  const card = e.target.closest('.product-card');
  const dataCardId = card.dataset.name.split('-');
  const id = dataCardId[0];
  const category = dataCardId[1];
  const name = dataCardId[2];

  const getCardData = (products) =>
    products.filter(product =>
      product.name === name &&
      product.category === category);

  products.then(menu => {
    const prod = getCardData(menu);
    const overlay = drawModal(prod, id);
    body.append(overlay);
    overlay.addEventListener('click', (e) => {
      if (
        !e.target.closest('.product-modal') ||
        e.target.closest('.product-modal__close')
      ) {
        overlay.remove();
        body.classList.remove('scroll-lock');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay) {
        overlay.remove();
        body.classList.remove('scroll-lock');
      }
    });
  });
}