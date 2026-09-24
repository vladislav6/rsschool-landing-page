import { body } from "../common/common";

function onLoadBurger() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const menuItem = document.querySelector('.menu-item');
  const actionBlock = document.querySelector('.action');

  const showHideMenu = () => {
    burger.classList.toggle('show');
    nav.classList.toggle('show-nav');
    menuItem.classList.toggle('show-link');
    body.classList.toggle('scroll-lock');
    burger.classList.contains('show')
      ? nav.append(menuItem)
      : actionBlock.append(menuItem);
    window.scrollTo(0, 0);
  };

  const linkAction = (e) => {
    if (e.target.closest('.menu-link') && burger.classList.contains('show')) {
      e.preventDefault();
      showHideMenu();
      setTimeout(() => {
        document.location.href = e.target.href;
      }, 300);
    }
  };

  burger.addEventListener('click', showHideMenu);
  nav.addEventListener('click', linkAction);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && burger.classList.contains('show')) {
      showHideMenu();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && burger.classList.contains('show')) {
      showHideMenu();
    }
  });
}

window.addEventListener('DOMContentLoaded', onLoadBurger);