import { createMyElement } from './../common/functions';

const download = createMyElement('section', '', 'download');

download.innerHTML = `
<div class="download-info">
  <h2>
    <span class="highlight">Download</span> our app<br /> to start ordering
  </h2>

  <p class="download-desc">
    Download the Resource app today and experience the comfort of ordering
    your favorite coffee from wherever you are
  </p>
  <div class="download-btn">
    <a href="https://apple.com/" target="_blank">
      <span class="btn-icon apple"></span>
      <p class="btn-title">Available on the</p>
      <p class="btn-subtitle">App Store</p>
    </a>
    <a href="https://google.com/" target="_blank">
      <span class="btn-icon google"></span>
      <p class="btn-title">Available on</p>
      <p class="btn-subtitle">Google Play</p>
    </a>
  </div>
</div>
<div class="download-phones">
  <img src="./images/mobile-screens.png" alt="Coffee app on smartphone">
</div>
`;
  
export default download;