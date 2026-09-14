import '../scss/index.scss';
import { createMyElement, themeSwitch } from './common/functions';
import { path, body, theme } from './common/common';
import header from './sections/header';
import footer from './sections/footer';
import catalog from './sections/catalog';
import hero from './sections/hero';
import favorite from './sections/favorite';
import about from './sections/about';
import download from './sections/download';

const titlePage = document.getElementsByTagName('title');
const app = document.getElementById('app');
const content = createMyElement('div', 'content');

if (!theme.name) {
  localStorage.setItem('theme', 'light');
  body.className = 'light';
}
  body.className = theme.name;

switch (path) {
  case '/catalog':
    titlePage[0].innerText = 'Coffee House | Catalog';
    content.append(catalog, footer);
    break;
  default:
    content.append(hero, favorite, about, download, footer);
}

 app.append(header, content);

 document.querySelector('.theme').addEventListener('click', themeSwitch);