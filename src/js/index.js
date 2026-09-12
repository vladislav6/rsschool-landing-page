import '../../node_modules/modern-normalize/';
import '../scss/index.scss';
import header from './sections/header';
import footer from './sections/footer';
import catalog from './sections/catalog';
import hero from './sections/hero';
import slider from './sections/slider';
import gallery from './sections/gallery';
import download from './sections/download';

const path = document.location.pathname;
const titlePage = document.getElementsByTagName('title');
const app = document.getElementById('app');
const content = document.createDocumentFragment();

switch (path) {
  case '/catalog':
    titlePage[0].innerText = 'Coffee House | Catalog';
    content.append(catalog);
    break;
  default:
    content.append(hero, slider, gallery, download);
}

 app.append(header, content, footer);