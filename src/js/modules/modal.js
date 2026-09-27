import { productFetch } from "../common/functions";
import { drawModal } from "../sections/modal";
import { body } from "../common/common";

export function modal(e) {
  if (!e.target.closest('.product-card')) {
    return;
  }
  body.classList.add('scroll-lock');
  const products = productFetch('./catalog/products.json');
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

      if (
        e.target.closest('.size-option') ||
        e.target.closest('.additive-option')
      ) {
        const optionSizeBtn = e.target.closest('.size-option');
        const optionAdditiveBtn = e.target.closest('.additive-option');
        const sizeBtns = overlay.querySelector('.product-modal__sizes').children;
        const additiveBtns = overlay.querySelector('.product-modal__additives').children;
        const currentPrice = +prod[0].price;
        let newPrice = 0;

        if (optionSizeBtn) {
          const addSizePrice = +optionSizeBtn.dataset.addPrice;
          newPrice = currentPrice + addSizePrice;
          [...sizeBtns].forEach(btn => btn.classList.remove('option--active'));
          [...additiveBtns].forEach(btn => btn.classList.remove('option--active'));
          optionSizeBtn.classList.add('option--active');
          overlay.querySelector('.product-modal__price').textContent = `$${newPrice.toFixed(2)}`;
        }

        if (optionAdditiveBtn) {
          const addAdditivePrice = +optionAdditiveBtn.dataset.addPrice;
          const price = +overlay.querySelector('.product-modal__price').textContent.slice(1);
          optionAdditiveBtn.classList.toggle('option--active');
          optionAdditiveBtn.classList.contains('option--active')
            ? newPrice = price + addAdditivePrice
            : newPrice = price - addAdditivePrice;
          overlay.querySelector('.product-modal__price').textContent = `$${newPrice.toFixed(2)}`;
        }
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