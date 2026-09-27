import { createMyElement } from "../common/functions";

export function drawModal(prod, id) { 
  const {
    name,
    description,
    price,
    category,
    sizes,
    additives
  } = prod[0];

  const modal = createMyElement('div', 'modal');

  modal.innerHTML = `
  <div class="product-modal">
    <div class="product-modal__image">
      <img src="./catalog/${category}-${+id + 1}.png" alt="${name}">
    </div>
    <div class="product-modal__content">
      <div class="product-modal__header">
        <h2 class="product-modal__title">${name}</h2>
        <p class="product-modal__description">${description}</p>
      </div>
      <div class="product-modal__option">
        <h3 class="product-modal__label">Size</h3>
        <div class="product-modal__sizes">
          <button type="button" class="size-option option--active" data-add-price="${sizes.s["add-price"]}">
            <span class="size-option__number">S</span>
            <span class="size-option__value">${sizes.s.size}</span>
          </button>
          <button type="button" class="size-option" data-add-price="${sizes.m["add-price"]}">
            <span class="size-option__number">M</span>
            <span class="size-option__value">${sizes.m.size}</span>
          </button>
          <button type="button" class="size-option" data-add-price="${sizes.l["add-price"]}">
            <span class="size-option__number">L</span>
            <span class="size-option__value">${sizes.l.size}</span>
          </button>
        </div>
      </div>
      <div class="product-modal__option">
        <h3 class="product-modal__label">Additives</h3>
        <div class="product-modal__additives">
          <button type="button" class="additive-option" data-add-price="${additives[0]["add-price"]}">
            <span class="additive-option__number">1</span>
            <span class="additive-option__name">${additives[0].name}</span>
          </button>
          <button type="button" class="additive-option" data-add-price="${additives[1]["add-price"]}">
            <span class="additive-option__number">2</span>
            <span class="additive-option__name">${additives[1].name}</span>
          </button>
          <button type="button" class="additive-option" data-add-price="${additives[2]["add-price"]}">
            <span class="additive-option__number">3</span>
            <span class="additive-option__name">${additives[2].name}</span>
          </button>
        </div>
      </div>
      <div class="product-modal__total">
        <span class="product-modal__total-label">Total:</span>
        <span class="product-modal__price">$${price}</span>
      </div>
      <div class="product-modal__notice">
        <span class="product-modal__notice-icon"></span>
        <p>
          The cost is not final. Download our mobile app to see the
          final price and place your order, Earn loyalty points and
          enjoy your favorite coffee with up to 20% discount.
        </p>
      </div>
      <button type="button" class="product-modal__close">Close</button>
    </div>
  </div>
  `;

  return modal;
}