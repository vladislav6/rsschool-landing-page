//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/js/common/common.js
var path = document.location.pathname;
var body = document.body;
var theme = { name: localStorage.getItem("theme") ?? "light" };
//#endregion
//#region src/js/common/functions.js
function createMyElement(element, classElement = "", idElement = "", textElement = "") {
	const myElement = document.createElement(element);
	if (textElement) myElement.textContent = textElement;
	if (classElement) myElement.className = classElement;
	if (idElement) myElement.id = idElement;
	return myElement;
}
var themeSwitch = () => {
	theme.name === "light" ? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "light");
	theme.name = localStorage.getItem("theme");
	body.className = theme.name;
	document.querySelector(".logo").src = `./images/${theme.name}/logo.png`;
};
//#endregion
//#region src/js/sections/header.js
var header = createMyElement("header");
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
//#endregion
//#region src/js/sections/footer.js
var footer = createMyElement("footer", "footer", "contacts");
footer.innerHTML = `
<div class="footer__content">
  <div class="footer__brand">
    <h2>
      Sip, Savor, Smile.<br /> <span class="highlight">It’s coffee time!</span>
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
//#endregion
//#region src/js/sections/catalog.js
var catalog = createMyElement("section", "catalog");
catalog.innerHTML = `
<h1>
  Behind each of our cups hides an <span class="highlight">amazing surprise</span>
</h1>

<div class="categories">
  <button type="button" class="category active"><span class="coffee-icon"></span>Coffee</button>
  <button type="button" class="category"><span class="tea-icon"></span>Tea</button>
  <button type="button" class="category"><span class="dessert-icon"></span>Dessert</button>
</div>

<div class="coffee-grid">
  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-1.png" alt="Irish coffee">
    </div>
    <div class="coffee-card__content">
      <h2>Irish coffee</h2>
      <p class="description">Fragrant black coffee with Jameson Irish whiskey and whipped milk</p>
      <p class="price">$7.00</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-2.png" alt="Kahlua coffee">
    </div>
    <div class="coffee-card__content">
      <h2>Kahlua coffee</h2>
      <p class="description">Classic coffee with milk and Kahlua liqueur under a cap of frothed milk</p>
      <p class="price">$7.00</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-3.png" alt="Honey raf">
    </div>
    <div class="coffee-card__content">
      <h2>Honey raf</h2>
      <p class="description">Espresso with frothed milk, cream and aromatic honey</p>
      <p class="price">$5.50</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-4.png" alt="Ice cappuccino">
    </div>
    <div class="coffee-card__content">
      <h2>Ice cappuccino</h2>
      <p class="description">Cappuccino with soft thick foam in summer version with ice</p>
      <p class="price">$5.00</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-5.png" alt="Espresso">
    </div>
    <div class="coffee-card__content">
      <h2>Espresso</h2>
      <p class="description">Classic black coffee</p>
      <p class="price">$4.50</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-6.png" alt="Latte">
    </div>
    <div class="coffee-card__content">
      <h2>Latte</h2>
      <p class="description">Espresso coffee with the addition of steamed milk and dense milk foam</p>
      <p class="price">$5.50</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-7.png" alt="Latte macchiato">
    </div>
    <div class="coffee-card__content">
      <h2>Latte macchiato</h2>
      <p class="description">Espresso with frothed milk and chocolate</p>
      <p class="price">$5.50</p>
    </div>
  </article>

  <article class="coffee-card">
    <div class="coffee-card__img">
      <img src="./images/catalog/coffee-8.png" alt="Coffee with cognac">
    </div>
    <div class="coffee-card__content">
      <h2>Coffee with cognac</h2>
      <p class="description">Fragrant black coffee with cognac and whipped cream</p>
      <p class="price">$6.50</p>
    </div>
  </article>
</div>

<button class="show-more" type="button"></button>
`;
//#endregion
//#region src/js/sections/hero.js
var hero = createMyElement("section", "hero");
hero.innerHTML = `
  <div class="hero-overlay">
    <div class="hero-block">
      <h1>
        <span class="highlight">Enjoy</span> premium coffee at our charming cafe
      </h1>
      <p>
        With its inviting atmosphere and delicious coffee options, the Coffee
        House Resource is a popular destination for coffee lovers and those
        seeking a warm and inviting space to enjoy their favorite beverage.
      </p>
      <button class="menu-btn">Menu <span class="cup"></span></button>
    </div>
  </div>
`;
//#endregion
//#region src/js/sections/favorite.js
var slider = createMyElement("section", "", "favorite");
slider.innerHTML = `
<h2>
  Choose your <span class="highlight">favorite</span> coffee
</h2>
<div class="slider">
  <button class="slider-btn slider-btn--left" aria-label="Previous coffee"></button>

  <div class="slide">
    <div class="coffee-image">
      <img
        src="./images/slider/coffee-slider-1.png"
        alt="S'mores Frappuccino"
      >
    </div>
    <div class="coffee-info">
      <h3>S'mores Frappuccino</h3>

      <p class="desc">
        This new drink takes an espresso and mixes it with brown
        sugar and cinnamon before being topped with oat milk.
      </p>

      <p class="price">$5.50</p>
    </div>
  </div>

  <button class="slider-btn slider-btn--right" aria-label="Next coffee"></button>
</div>
<div class="slider-dots">
  <span class="dot dot--active"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>
`;
//#endregion
//#region src/js/sections/about.js
var gallery = createMyElement("section", "", "about");
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
//#endregion
//#region src/js/sections/download.js
var download = createMyElement("section", "", "download");
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
//#endregion
//#region src/js/index.js
var app = document.getElementById("app");
var content = createMyElement("div", "content");
if (!localStorage.getItem("theme")) {
	localStorage.setItem("theme", "light");
	body.className = "light";
}
body.className = theme.name;
if (path === "/rsschool-landing-page/catalog") content.append(catalog, footer);
else content.append(hero, slider, gallery, download, footer);
app.append(header, content);
document.querySelector(".theme").addEventListener("click", themeSwitch);
document.querySelector(".menu-btn")?.addEventListener("click", () => document.location.href = "/rsschool-landing-page/catalog");
//#endregion

//# sourceMappingURL=js-BMoN-ygo.js.map