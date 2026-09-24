import '../scss/index.scss';
import { themeSwitch, createMyElement } from './common/functions';
import { path, body, theme } from './common/common';
import header from './sections/header';
import footer from './sections/footer';
import catalog from './sections/catalog';
import hero from './sections/hero';
import favorite from './sections/favorite';
import about from './sections/about';
import download from './sections/download';
import './modules/burger.js';
import './modules/slider.js';

const app = document.getElementById('app');
const content = createMyElement('div', 'content');

if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'light');
  body.className = 'light';
}
  body.className = theme.name;

if (path === '/catalog') {
  content.append(catalog, footer);
} else {
  content.append(hero, favorite, about, download, footer);
}

app.append(header, content);

 document.querySelector('.theme').addEventListener('click', themeSwitch);
 document.querySelector('.menu-btn')
  ?.addEventListener('click', () => document.location.href = '/rsschool-landing-page/catalog');
