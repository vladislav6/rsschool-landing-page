import { createMyElement } from './../common/functions';
import { path, theme } from '../common/common';

const header = createMyElement('header');

header.innerHTML = `
  <a href="/rsschool-landing-page/">
    <img class="logo" src="./images/${theme.name}/logo.png" alt="Logo">
  </a>
  <nav>
    <ul>
      <li><a href="/rsschool-landing-page/#favorite">Favorite coffee</a></li>
      <li><a href="/rsschool-landing-page/#about">About</a></li>
      <li><a href="/rsschool-landing-page/#download">Mobile app</a></li>
      <li><a href="${path}#contacts">Contact us</a></li>
    </ul>
  </nav>
  <div class="action">
    <div class="theme">
      <div class="light-btn"></div>
      <div class="dark-btn"></div>
    </div>
    <a class="menu-item" href="/rsschool-landing-page/catalog">Menu</a>
    <div class="burger">
      <span class="line"></span>
      <span class="line"></span>
    </div>
  </div>
`;

export default header;