
export function showMore(products) {
  const showMoreBtn = document.querySelector('.show-more');
  const coffeeCards = document.querySelectorAll('.product-card');

  if (products.length <= 4) {
    showMoreBtn.style.display = 'none';
  } else {
    showMoreBtn.removeAttribute('style');
  }

  const showMoreAction = () => {
    [...coffeeCards].forEach(card =>
      card.classList.remove('card'));
    showMoreBtn.style.display = 'none';
  };

  showMoreBtn.addEventListener('click', showMoreAction);
}