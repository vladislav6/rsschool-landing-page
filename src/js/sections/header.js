import { createMyElement } from './../common/functions';
import { path, theme } from '../common/common';

const header = createMyElement('header');

header.innerHTML = `
  <a href="/">
    <img class="logo" src="./src/assets/icons/${theme.name}/logo.png" alt="Logo">
  </a>
  <nav>
    <ul>
      <li><a href="/#favorite">Favorite coffee</a></li>
      <li><a href="/#about">About</a></li>
      <li><a href="/#download">Mobile app</a></li>
      <li><a href="${path}#contacts">Contact us</a></li>
    </ul>
  </nav>
  <div class="action">
    <div class="theme">
      <div class="light-btn"></div>
      <div class="dark-btn"></div>
    </div>
    <a class="menu-item" href="/catalog">Menu</a>
  </div>
`;

export default header;