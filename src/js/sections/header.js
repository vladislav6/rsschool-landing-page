import { createMyElement } from './../common/functions';
import { path, theme } from '../common/common';

const header = createMyElement('header');

header.innerHTML = `
  <a href="/rsschool-landing-page/">
    <img class="logo" src="./images/${theme.name}/logo.png" alt="Logo">
  </a>
  <nav class="nav">
    <ul>
      <li><a href="/#favorite" class="menu-link">Favorite coffee</a></li>
      <li><a href="/#about" class="menu-link">About</a></li>
      <li><a href="/#download" class="menu-link">Mobile app</a></li>
      <li><a href="${path}#contacts" class="menu-link">Contact us</a></li>
    </ul>
  </nav>
  <div class="action">
    <div class="theme">
      <div class="light-btn"></div>
      <div class="dark-btn"></div>
    </div>
    <div class="burger">
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <a class="menu-item menu-link" href="/catalog">Menu</a>
  </div>
`;

export default header;