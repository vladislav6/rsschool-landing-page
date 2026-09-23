import { body, theme } from "./common";

export function createMyElement(
  element,
  classElement = '',
  idElement = '',
  textElement = ''
) {
  const myElement = document.createElement(element);
  if (textElement) {
    myElement.textContent = textElement;
  }
  if (classElement) {
    myElement.className = classElement;
  }
  if (idElement) {
    myElement.id = idElement;
  }

  return myElement;
}

 export const themeSwitch = () => {
  theme.name === 'light'
    ? localStorage.setItem('theme', 'dark')
    : localStorage.setItem('theme', 'light');
  
  theme.name = localStorage.getItem('theme');
  
  body.classList.contains('scroll-lock')
    ? body.classList = `${theme.name} scroll-lock`
    : body.classList = theme.name; 

  document.querySelector('.logo').src = `./images/${theme.name}/logo.png`;
 };