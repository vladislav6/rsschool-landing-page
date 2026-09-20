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
async function productFetch(url) {
	return await fetch(url).then((response) => response.json()).catch((error) => console.log(`Error: ${error}`));
}
function cleanDOM(parent) {
	while (parent.firstChild) parent.firstChild.remove();
}
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
	body.classList.contains("scroll-lock") ? body.classList = `${theme.name} scroll-lock` : body.classList = theme.name;
	document.querySelector(".logo").src = `./images/${theme.name}/logo.png`;
};
//#endregion
//#region src/js/sections/header.js
var header = createMyElement("header");
header.innerHTML = `
  <a href="/rsschool-landing-page/">
    <img class="logo" src="./images/${theme.name}/logo.png" alt="Logo">
  </a>
  <nav class="nav">
    <ul>
      <li><a href="/rsschool-landing-page/#favorite" class="menu-link">Favorite coffee</a></li>
      <li><a href="/rsschool-landing-page/#about" class="menu-link">About</a></li>
      <li><a href="/rsschool-landing-page/#download" class="menu-link">Mobile app</a></li>
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
    <a class="menu-item menu-link ${path === "/rsschool-landing-page/catalog" ? "active-page" : ""}" href="/rsschool-landing-page/catalog">Menu</a>
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
  <button type="button" class="category active" data-cat-name="coffee"><span class="coffee-icon"></span>Coffee</button>
  <button type="button" class="category" data-cat-name="tea"><span class="tea-icon"></span>Tea</button>
  <button type="button" class="category" data-cat-name="dessert"><span class="dessert-icon"></span>Dessert</button>
</div>

<div class="product-grid"></div>

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
  <div class="no-button"></div>
  <button class="slider-btn slider-btn--left" aria-label="Previous coffee"></button>

  <div class="slides">
    <div class="slide">
      <div class="coffee-image">
        <img
          src="./images/slider/coffee-slider-3.png"
          alt="Ice coffee"
        >
      </div>
      <div class="coffee-info">
        <h3>Ice coffee</h3>

        <p class="desc">
          A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.
        </p>

        <p class="price">$4.50</p>
      </div>
    </div>
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
    <div class="slide">
      <div class="coffee-image">
        <img
          src="./images/slider/coffee-slider-2.png"
          alt="Caramel Macchiato"
        >
      </div>
      <div class="coffee-info">
        <h3>Caramel Macchiato</h3>

        <p class="desc">
          Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.
        </p>

        <p class="price">$5.00</p>
      </div>
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
//#region src/js/modules/burger.js
function onLoadBurger() {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav");
	const menuItem = document.querySelector(".menu-item");
	const actionBlock = document.querySelector(".action");
	const showHideMenu = () => {
		burger.classList.toggle("show");
		nav.classList.toggle("show-nav");
		menuItem.classList.toggle("show-link");
		body.classList.toggle("scroll-lock");
		burger.classList.contains("show") ? nav.append(menuItem) : actionBlock.append(menuItem);
		window.scrollTo(0, 0);
	};
	const linkAction = (e) => {
		if (e.target.closest(".menu-link") && burger.classList.contains("show")) {
			e.preventDefault();
			showHideMenu();
			setTimeout(() => {
				document.location.href = e.target.href;
			}, 300);
		}
	};
	burger.addEventListener("click", showHideMenu);
	nav.addEventListener("click", linkAction);
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && burger.classList.contains("show")) showHideMenu();
	});
	window.addEventListener("resize", () => {
		if (window.innerWidth > 768 && burger.classList.contains("show")) showHideMenu();
	});
}
window.addEventListener("DOMContentLoaded", onLoadBurger);
//#endregion
//#region src/js/modules/slider.js
function onLoadSlider() {
	const slider = document.querySelector(".slider");
	const noButtonSlider = document.querySelector(".no-button");
	const slides = document.querySelector(".slides");
	const dots = document.querySelector(".slider-dots")?.children;
	let startX = 0;
	let currentX = 0;
	let diffX = 0;
	const changeDot = (position) => {
		[...dots].forEach((dot) => dot.classList.remove("dot--active"));
		dots[position].classList.add("dot--active");
	};
	const moveSlide = (position) => {
		[...slides.children].forEach((slide) => {
			if (position === 0) {
				slide.style.transition = "none";
				slide.style.transform = `translateX(${position}%)`;
			} else {
				slide.style.transition = "transform .4s ease";
				slide.style.transform = `translateX(${position}%)`;
			}
		});
	};
	let currentPosition = 0;
	let currentDotPosition = 0;
	const changeSlideForward = (btn = null) => {
		btn?.classList.add("no-click");
		currentPosition -= 100;
		currentDotPosition += 1;
		if (currentDotPosition > 2) currentDotPosition = 0;
		moveSlide(currentPosition);
		changeDot(currentDotPosition);
		setTimeout(() => {
			currentPosition = 0;
			moveSlide(currentPosition);
			slides.append(slides.firstElementChild);
			btn?.classList.remove("no-click");
		}, 400);
	};
	const changeSlideBackward = (btn = null) => {
		btn?.classList.add("no-click");
		currentPosition += 100;
		currentDotPosition -= 1;
		if (currentDotPosition < 0) currentDotPosition = 2;
		moveSlide(currentPosition);
		changeDot(currentDotPosition);
		setTimeout(() => {
			currentPosition = 0;
			moveSlide(currentPosition);
			slides.prepend(slides.lastElementChild);
			btn?.classList.remove("no-click");
		}, 400);
	};
	const changeSlide = (e) => {
		if (e.target.closest(".slider-btn--left")) changeSlideBackward(e.target.closest(".slider-btn--left"));
		if (e.target.closest(".slider-btn--right")) changeSlideForward(e.target.closest(".slider-btn--right"));
	};
	const swipeClickSlide = () => {
		const isNoClick = document.querySelector(".no-click");
		const rightBtn = document.querySelector(".slider-btn--right");
		const leftBtn = document.querySelector(".slider-btn--left");
		if (diffX > 50 && !isNoClick) changeSlideForward(rightBtn);
		else if (diffX < -50 && !isNoClick) changeSlideBackward(leftBtn);
		startX = 0;
		diffX = 0;
		slider?.addEventListener("click", changeSlide);
	};
	slider?.addEventListener("click", changeSlide);
	noButtonSlider?.addEventListener("touchstart", (e) => {
		startX = e.touches[0].clientX;
	});
	noButtonSlider?.addEventListener("touchmove", (e) => {
		currentX = e.touches[0].clientX;
		diffX = startX - currentX;
	});
	noButtonSlider?.addEventListener("touchend", swipeClickSlide);
	noButtonSlider?.addEventListener("mousedown", (e) => {
		slider?.removeEventListener("click", changeSlide);
		startX = e.clientX;
	});
	noButtonSlider?.addEventListener("mousemove", (e) => {
		currentX = e.clientX;
		diffX = startX - currentX;
	});
	noButtonSlider?.addEventListener("mouseup", swipeClickSlide);
}
window.addEventListener("DOMContentLoaded", onLoadSlider);
//#endregion
//#region src/js/sections/modal.js
function drawModal(prod, id) {
	const { name, description, price, category, sizes, additives } = prod[0];
	const modal = createMyElement("div", "modal");
	modal.innerHTML = `
  <div class="product-modal">
    <div class="product-modal__image">
      <img src="./catalog/${category}-${+id + 1}.png" alt="${name}">
    </div>
    <div class="product-modal__content">
      <div class="product-modal__header">
        <h2 class="product-modal__title">${name}</h2>
        <p class="product-modal__description">${description}</p>
      </div>
      <div class="product-modal__option">
        <h3 class="product-modal__label">Size</h3>
        <div class="product-modal__sizes">
          <button type="button" class="size-option option--active" data-add-price="${sizes.s["add-price"]}">
            <span class="size-option__number">S</span>
            <span class="size-option__value">${sizes.s.size}</span>
          </button>
          <button type="button" class="size-option" data-add-price="${sizes.m["add-price"]}">
            <span class="size-option__number">M</span>
            <span class="size-option__value">${sizes.m.size}</span>
          </button>
          <button type="button" class="size-option" data-add-price="${sizes.l["add-price"]}">
            <span class="size-option__number">L</span>
            <span class="size-option__value">${sizes.l.size}</span>
          </button>
        </div>
      </div>
      <div class="product-modal__option">
        <h3 class="product-modal__label">Additives</h3>
        <div class="product-modal__additives">
          <button type="button" class="additive-option" data-add-price="${additives[0]["add-price"]}">
            <span class="additive-option__number">1</span>
            <span class="additive-option__name">${additives[0].name}</span>
          </button>
          <button type="button" class="additive-option" data-add-price="${additives[1]["add-price"]}">
            <span class="additive-option__number">2</span>
            <span class="additive-option__name">${additives[1].name}</span>
          </button>
          <button type="button" class="additive-option" data-add-price="${additives[2]["add-price"]}">
            <span class="additive-option__number">3</span>
            <span class="additive-option__name">${additives[2].name}</span>
          </button>
        </div>
      </div>
      <div class="product-modal__total">
        <span class="product-modal__total-label">Total:</span>
        <span class="product-modal__price">$${price}</span>
      </div>
      <div class="product-modal__notice">
        <span class="product-modal__notice-icon"></span>
        <p>
          The cost is not final. Download our mobile app to see the
          final price and place your order, Earn loyalty points and
          enjoy your favorite coffee with up to 20% discount.
        </p>
      </div>
      <button type="button" class="product-modal__close">Close</button>
    </div>
  </div>
  `;
	return modal;
}
//#endregion
//#region src/js/modules/modal.js
function modal(e) {
	if (!e.target.closest(".product-card")) return;
	body.classList.add("scroll-lock");
	const products = productFetch("./catalog/products.json");
	const dataCardId = e.target.closest(".product-card").dataset.name.split("-");
	const id = dataCardId[0];
	const category = dataCardId[1];
	const name = dataCardId[2];
	const getCardData = (products) => products.filter((product) => product.name === name && product.category === category);
	products.then((menu) => {
		const prod = getCardData(menu);
		const overlay = drawModal(prod, id);
		body.append(overlay);
		overlay.addEventListener("click", (e) => {
			if (!e.target.closest(".product-modal") || e.target.closest(".product-modal__close")) {
				overlay.remove();
				body.classList.remove("scroll-lock");
			}
			if (e.target.closest(".size-option") || e.target.closest(".additive-option")) {
				const optionSizeBtn = e.target.closest(".size-option");
				const optionAdditiveBtn = e.target.closest(".additive-option");
				const sizeBtns = overlay.querySelector(".product-modal__sizes").children;
				const additiveBtns = overlay.querySelector(".product-modal__additives").children;
				const currentPrice = +prod[0].price;
				let newPrice = 0;
				if (optionSizeBtn) {
					newPrice = currentPrice + +optionSizeBtn.dataset.addPrice;
					[...sizeBtns].forEach((btn) => btn.classList.remove("option--active"));
					[...additiveBtns].forEach((btn) => btn.classList.remove("option--active"));
					optionSizeBtn.classList.add("option--active");
					overlay.querySelector(".product-modal__price").textContent = `$${newPrice.toFixed(2)}`;
				}
				if (optionAdditiveBtn) {
					const addAdditivePrice = +optionAdditiveBtn.dataset.addPrice;
					const price = +overlay.querySelector(".product-modal__price").textContent.slice(1);
					optionAdditiveBtn.classList.toggle("option--active");
					optionAdditiveBtn.classList.contains("option--active") ? newPrice = price + addAdditivePrice : newPrice = price - addAdditivePrice;
					overlay.querySelector(".product-modal__price").textContent = `$${newPrice.toFixed(2)}`;
				}
			}
		});
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape" && overlay) {
				overlay.remove();
				body.classList.remove("scroll-lock");
			}
		});
	});
}
//#endregion
//#region src/js/modules/showMore.js
function showMore(products) {
	const showMoreBtn = document.querySelector(".show-more");
	const coffeeCards = document.querySelectorAll(".product-card");
	if (products.length <= 4) showMoreBtn.style.display = "none";
	else showMoreBtn.removeAttribute("style");
	const showMoreAction = () => {
		[...coffeeCards].forEach((card) => card.classList.remove("card"));
		showMoreBtn.style.display = "none";
	};
	showMoreBtn.addEventListener("click", showMoreAction);
}
//#endregion
//#region src/js/modules/products.js
function onProductsLoad() {
	const categories = document.querySelector(".categories");
	const coffeeGrid = document.querySelector(".product-grid");
	const products = productFetch("./catalog/products.json");
	const getProductsByCategory = (products, category) => products.filter((product) => product.category === category);
	const getCards = (products) => {
		const fragment = document.createDocumentFragment();
		products.forEach((prod, id) => {
			const article = createMyElement("article", "product-card card");
			article.dataset.name = `${id}-${prod.category}-${prod.name}`;
			const divImg = createMyElement("div", "product-card__img");
			const img = createMyElement("img");
			img.src = `./catalog/${prod.category}-${id + 1}.png`;
			img.alt = prod.name;
			const divInfo = createMyElement("div", "product-card__content");
			const title = createMyElement("h2", "", "", prod.name);
			const desc = createMyElement("p", "description", "", prod.description);
			const price = createMyElement("p", "price", "", prod.price);
			divImg.append(img);
			divInfo.append(title, desc, price);
			article.append(divImg, divInfo);
			fragment.append(article);
		});
		return fragment;
	};
	const renderCards = (cat) => {
		products.then((products) => {
			const prodByCat = getProductsByCategory(products, cat);
			const fragment = getCards(prodByCat);
			cleanDOM(coffeeGrid);
			coffeeGrid.append(fragment);
			showMore(prodByCat);
		});
	};
	const getProduct = (e) => {
		if (e.target.closest(".category")) {
			const catBtn = e.target.closest(".category");
			[...categories.children].forEach((cat) => cat.classList.remove("active"));
			catBtn.classList.add("active");
			const cat = catBtn.dataset.catName;
			renderCards(cat);
		}
	};
	categories?.addEventListener("click", getProduct);
	coffeeGrid?.addEventListener("click", modal);
	if (coffeeGrid) renderCards("coffee");
}
window.addEventListener("DOMContentLoaded", onProductsLoad);
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

//# sourceMappingURL=js-Cwbb8J6t.js.map