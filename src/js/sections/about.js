import { createMyElement } from '../common/functions';

const gallery = createMyElement('section', '', 'about');

gallery.innerHTML = `
<h2 class="resource__title">
  Resource is <span class="highlight">the perfect and cozy place</span>
  where you can enjoy a variety of hot beverages, relax,
  catch up with friends, or get some work done.
</h2>

<div class="gallery">
  <div class="picture big">
    <div class="one"></div>
  </div>
  <div class="picture small">
    <div class="two"></div>
  </div>
  <div class="picture small">
    <div class="three"></div>
  </div>
  <div class="picture big">
    <div class="four"></div>
  </div>
</div>
`;

export default gallery;