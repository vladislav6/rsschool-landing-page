import { createMyElement } from './../common/functions';

const footer = createMyElement('footer', 'footer', 'contacts');

footer.innerHTML = `
<div class="footer__content">
  <div class="footer__brand">
    <h2>
      Sip, Savor, Smile. <span class="highlight">It’s coffee time!</span>
    </h2>

    <div class="footer__socials">
      <a href="https://x.com/" target="_blank" aria-label="Twitter"></a>
      <a href="https://instagram.com/" target="_blank" aria-label="Instagram"></a>
      <a href="https://facebook.com/" target="_blank" aria-label="Facebook"></a>
    </div>
  </div>
  <div class="footer__contacts">
    <h3>Contact us</h3>
    <ul>
      <li><span class="contacts-icon address"></span><a href="https://maps.app.goo.gl/JmUTV6M4eCEt5uxK7" target="_blank">8558 Green Rd., LA</a></li>
      <li><span class="contacts-icon phone"></span><a href="tel:+1(603)555-0123">+1 (603) 555-0123</a></li>
      <li><span class="contacts-icon time"></span>Mon–Sat: 9:00–23:00</li>
    </ul>
  </div>
</div>
`;

export default footer;