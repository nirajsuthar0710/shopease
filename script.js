
:root {
  --ink: #20231f;
  --muted: #777c73;
  --cream: #f7f7f2;
  --white: #fff;
  --green: #c8e0a9;
  --line: #e7e9e1;
  --dark-green: #34452d;
  --serif: Georgia, "Times New Roman", serif;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: "DM Sans", sans-serif; color: var(--ink); background: var(--cream); }
button, input, select { font: inherit; }
button, a { -webkit-tap-highlight-color: transparent; }
a { color: inherit; text-decoration: none; }
button { cursor: pointer; }
.announcement { background: var(--dark-green); color: white; text-align: center; padding: 10px 15px; font-size: 11px; letter-spacing: .7px; }
.header { height: 78px; padding: 0 7%; display: flex; align-items: center; justify-content: space-between; background: rgba(247,247,242,.96); position: sticky; top: 0; z-index: 20; border-bottom: 1px solid var(--line); }
.brand { display: inline-flex; align-items: center; gap: 9px; font-family: Manrope, sans-serif; font-size: 21px; font-weight: 800; letter-spacing: -1px; }
.brand-mark { display: grid; place-items: center; width: 31px; height: 31px; background: var(--dark-green); color: white; border-radius: 10px 10px 10px 2px; font-size: 17px; }
.brand-dot { color: #78985c; margin-left: -9px; }
.nav { display: flex; gap: 35px; align-items: center; }
.nav a { color: #5f655c; font-size: 13px; font-weight: 600; transition: color .2s; }
.nav a:hover, .text-link:hover { color: #78985c; }
.header-actions { display: flex; align-items: center; gap: 13px; }
.icon-btn, .menu-button { border: 0; background: transparent; font-size: 26px; color: var(--ink); }
.cart-button { background: var(--ink); color: white; border: 0; border-radius: 30px; padding: 11px 17px; font-size: 12px; font-weight: 700; }
.cart-button span { display: inline-grid; place-items: center; margin-left: 7px; width: 20px; height: 20px; border-radius: 50%; color: var(--ink); background: var(--green); }
.menu-button { display: none; }
.hero { display: grid; grid-template-columns: 1fr 1fr; min-height: 600px; padding: 65px 7% 70px; gap: 6%; align-items: center; }
.hero-content { padding: 30px 0; }
.eyebrow { display: inline-flex; align-items: center; gap: 9px; color: #78866e; font-size: 10px; letter-spacing: 2px; font-weight: 800; }
.eyebrow-line { display: inline-block; width: 25px; height: 1px; background: #8ba477; }
.hero h1 { font-family: Manrope, sans-serif; font-size: clamp(45px, 6vw, 76px); line-height: 1.06; letter-spacing: -4px; margin: 25px 0 20px; font-weight: 800; }
.hero h1 span, .section-top h2 span, .about-section h2 span { color: #81976d; font-family: var(--serif); font-style: italic; font-weight: 400; }
.hero-content > p { color: var(--muted); max-width: 430px; line-height: 1.8; font-size: 14px; }
.hero-actions { display: flex; align-items: center; gap: 25px; margin-top: 30px; flex-wrap: wrap; }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 20px; border: 0; padding: 15px 21px; border-radius: 4px; font-size: 12px; font-weight: 700; transition: transform .2s, background .2s; }
.btn:hover { transform: translateY(-3px); }
.btn-dark { color: white; background: var(--ink); }
.btn-dark:hover { background: var(--dark-green); }
.btn-light { background: white; color: var(--ink); margin-top: 22px; }
.text-link { font-size: 12px; font-weight: 700; border-bottom: 1px solid #9ca58f; padding-bottom: 5px; }
.hero-note { display: flex; align-items: center; gap: 12px; margin-top: 65px; }
.note-star { display: grid; place-items: center; width: 39px; height: 39px; border-radius: 50%; background: #e6eddd; color: var(--dark-green); font-size: 20px; }
.hero-note strong, .hero-note small { display: block; }
.hero-note strong { font-size: 11px; }
.hero-note small { color: var(--muted); margin-top: 4px; font-size: 10px; }
.hero-image-wrap { height: 470px; position: relative; }
.hero-image-wrap > img { width: 100%; height: 100%; object-fit: cover; border-radius: 3px; }
.hero-floating-card { position: absolute; left: -40px; bottom: 35px; background: white; padding: 22px 25px; box-shadow: 0 12px 40px #00000012; min-width: 170px; }
.hero-floating-card span, .hero-floating-card strong, .hero-floating-card a { display: block; }
.hero-floating-card span { color: #81976d; font-size: 9px; letter-spacing: 1.6px; font-weight: 800; }
.hero-floating-card strong { font: 25px/1.15 var(--serif); margin: 10px 0; }
.hero-floating-card a { font-size: 10px; font-weight: 700; }
.hero-image-caption { position: absolute; right: 0; top: -24px; color: #7d8378; letter-spacing: 2px; font-size: 9px; }
.benefits { display: grid; grid-template-columns: repeat(3,1fr); padding: 27px 10%; background: #edf0e8; gap: 25px; }
.benefits > div { display: flex; align-items: center; justify-content: center; gap: 13px; }
.benefits > div > span { font-size: 24px; color: #82966e; }
.benefits strong, .benefits small { display: block; }
.benefits strong { font-size: 11px; }
.benefits small { color: var(--muted); font-size: 10px; margin-top: 4px; }
.section { padding: 100px 7%; }
.section-top { display: flex; justify-content: space-between; align-items: end; gap: 20px; }
.section-top h2, .about-section h2 { font: 800 clamp(34px,4vw,49px)/1.1 Manrope,sans-serif; letter-spacing: -2px; margin-top: 15px; }
.section-description { color: var(--muted); font-size: 13px; margin-top: 12px; }
.product-total { color: var(--muted); font-size: 10px; letter-spacing: 1px; padding-bottom: 8px; }
.shop-toolbar { display: flex; justify-content: space-between; align-items: center; gap: 20px; margin: 43px 0 25px; flex-wrap: wrap; }
.category-tabs { display: flex; gap: 8px; flex-wrap: wrap; }
.category-btn { background: transparent; border: 1px solid var(--line); border-radius: 30px; padding: 9px 16px; font-size: 11px; color: #687064; transition: .2s; }
.category-btn.active, .category-btn:hover { color: white; background: var(--dark-green); border-color: var(--dark-green); }
.shop-tools { display: flex; gap: 10px; }
.search-box { display: flex; align-items: center; gap: 8px; border: 1px solid var(--line); background: white; padding: 0 12px; min-width: 190px; }
.search-box span { font-size: 20px; }
.search-box input { width: 100%; min-width: 0; border: 0; outline: 0; padding: 11px 0; font-size: 11px; background: transparent; }
.shop-tools select { border: 1px solid var(--line); background: white; padding: 0 12px; font-size: 11px; color: #53594f; outline: 0; }
.product-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 22px; }
.product-card { min-width: 0; }
.product-image { position: relative; overflow: hidden; height: 285px; background: #e9ebe4; }
.product-image img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
.product-card:hover .product-image img { transform: scale(1.06); }
.product-tag { position: absolute; top: 13px; left: 13px; background: white; padding: 7px 10px; font-size: 9px; font-weight: 800; letter-spacing: .6px; }
.wish-btn { position: absolute; top: 10px; right: 10px; border: 0; border-radius: 50%; width: 34px; height: 34px; background: white; font-size: 18px; color: #555; }
.wish-btn.active { color: #c34f55; }
.quick-view { position: absolute; bottom: 12px; left: 12px; right: 12px; padding: 11px; border: 0; background: rgba(255,255,255,.94); font-size: 10px; font-weight: 800; transform: translateY(60px); transition: .25s; }
.product-card:hover .quick-view { transform: translateY(0); }
.product-info { padding: 15px 2px 0; }
.product-category { color: #87927c; font-size: 9px; text-transform: uppercase; letter-spacing: 1.2px; font-weight: 800; }
.product-info h3 { font-size: 14px; margin: 7px 0; }
.product-bottom { display: flex; align-items: center; justify-content: space-between; }
.product-price { font-size: 14px; font-weight: 800; }
.add-btn { border: 1px solid #d9ded2; background: transparent; padding: 8px 11px; font-size: 10px; font-weight: 700; }
.add-btn:hover { background: var(--dark-green); color: white; border-color: var(--dark-green); }
.empty-state { text-align: center; padding: 65px 15px; }
.empty-state span { font-size: 40px; color: #8da27b; }
.empty-state h3 { margin: 10px 0; }
.empty-state p { color: var(--muted); font-size: 13px; }
.collection-banner { margin: 0 7% 90px; display: grid; grid-template-columns: 1fr 1fr; background: #35462e; color: white; min-height: 370px; overflow: hidden; }
.collection-copy { padding: 60px 12%; align-self: center; }
.collection-copy .eyebrow { color: #c1d5ad; }
.collection-copy h2 { font: 44px/1.12 var(--serif); margin: 18px 0; }
.collection-copy h2 em { color: #c8e0a9; }
.collection-copy p { font-size: 12px; color: #d0d8c9; line-height: 1.8; max-width: 320px; }
.collection-image { min-height: 370px; }
.collection-image img { width: 100%; height: 100%; object-fit: cover; }
.about-section { display: grid; grid-template-columns: .6fr 2fr .7fr; align-items: center; gap: 40px; padding-top: 35px; padding-bottom: 100px; }
.about-symbol { font: 100px/1 Manrope,sans-serif; font-weight: 800; color: #dce5d3; }
.about-symbol span { color: #879b75; }
.about-section h2 { margin-bottom: 18px; }
.about-section p { color: var(--muted); font-size: 13px; line-height: 1.9; max-width: 490px; margin-bottom: 20px; }
.about-stat { border-left: 1px solid #d8ddd2; padding-left: 25px; }
.about-stat strong, .about-stat span { display: block; }
.about-stat strong { font: 48px var(--serif); color: #82976f; }
.about-stat span { color: var(--muted); font-size: 11px; line-height: 1.7; }
.footer { border-top: 1px solid var(--line); padding: 27px 7%; display: flex; align-items: center; justify-content: space-between; gap: 15px; }
.footer p, .footer > span { font-size: 10px; color: var(--muted); }
.footer-brand { font-size: 17px; }
.footer-brand .brand-mark { width: 27px; height: 27px; font-size: 14px; }
.overlay { position: fixed; inset: 0; background: #1118; z-index: 40; opacity: 0; visibility: hidden; transition: .25s; }
.overlay.show { opacity: 1; visibility: visible; }
.cart-drawer { position: fixed; z-index: 41; top: 0; right: 0; width: min(430px,100%); height: 100dvh; background: var(--cream); padding: 27px; transform: translateX(105%); transition: transform .3s; display: flex; flex-direction: column; }
.cart-drawer.open { transform: translateX(0); }
.drawer-header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 22px; border-bottom: 1px solid var(--line); }
.drawer-header h2 { font: 28px var(--serif); margin-top: 7px; }
.drawer-header h2 span { font: 12px "DM Sans"; color: var(--muted); }
.close-btn { border: 0; background: transparent; font-size: 30px; color: var(--ink); line-height: 1; }
.cart-items { overflow-y: auto; flex: 1; }
.cart-row { display: grid; grid-template-columns: 75px 1fr auto; gap: 13px; padding: 17px 0; border-bottom: 1px solid var(--line); align-items: center; }
.cart-row img { width: 75px; height: 82px; object-fit: cover; }
.cart-row h4 { font-size: 12px; margin-bottom: 6px; }
.cart-row p { font-size: 11px; color: var(--muted); }
.quantity { display: flex; align-items: center; gap: 10px; margin-top: 9px; }
.quantity button { width: 23px; height: 23px; border: 1px solid var(--line); background: white; }
.remove-btn { border: 0; background: transparent; color: #a05c5c; font-size: 10px; margin-top: 7px; }
.cart-empty { margin: auto; text-align: center; }
.cart-empty > span { font-size: 42px; color: #81976d; }
.cart-empty h3 { font: 24px var(--serif); margin: 10px 0; }
.cart-empty p { font-size: 12px; color: var(--muted); margin-bottom: 20px; }
.cart-footer { padding-top: 18px; border-top: 1px solid var(--line); }
.subtotal { display: flex; justify-content: space-between; font-size: 14px; }
.cart-footer > p { color: var(--muted); font-size: 10px; margin: 12px 0; }
.checkout-btn { width: 100%; }
.modal { display: none; position: fixed; z-index: 51; top: 50%; left: 50%; transform: translate(-50%,-50%); width: min(680px,calc(100% - 30px)); max-height: 90dvh; overflow-y: auto; background: var(--cream); padding: 30px; }
.modal.show { display: block; }
.modal-close { position: absolute; right: 17px; top: 13px; z-index: 2; }
.modal-product { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; align-items: center; }
.modal-product img { width: 100%; height: 330px; object-fit: cover; }
.modal-product h2 { font: 30px var(--serif); margin: 10px 0; }
.modal-product p { color: var(--muted); font-size: 12px; line-height: 1.8; margin: 12px 0; }
.modal-product strong { font-size: 18px; display: block; margin: 15px 0; }
.toast { position: fixed; z-index: 60; bottom: 25px; left: 50%; transform: translate(-50%,20px); opacity: 0; pointer-events: none; background: var(--ink); color: white; padding: 13px 20px; font-size: 11px; border-radius: 3px; transition: .25s; }
.toast.show { opacity: 1; transform: translate(-50%,0); }
@media (max-width: 1000px) {
  .product-grid { grid-template-columns: repeat(2,1fr); }
  .product-image { height: 330px; }
  .hero { gap: 4%; }
  .hero-image-wrap { height: 410px; }
}
@media (max-width: 700px) {
  .header { height: 67px; padding: 0 5%; }
  .brand { font-size: 18px; }
  .nav { display: none; position: absolute; top: 67px; left: 0; right: 0; padding: 22px 6%; background: var(--cream); border-bottom: 1px solid var(--line); flex-direction: column; align-items: flex-start; gap: 20px; }
  .nav.open { display: flex; }
  .menu-button { display: block; font-size: 21px; }
  .icon-btn { font-size: 22px; }
  .cart-button { padding: 9px 12px; }
  .hero { grid-template-columns: 1fr; padding: 48px 6% 55px; gap: 35px; }
  .hero h1 { font-size: clamp(45px,12vw,65px); letter-spacing: -3px; }
  .hero-note { margin-top: 35px; }
  .hero-image-wrap { height: 360px; margin-left: 20px; }
  .hero-floating-card { left: -20px; bottom: 20px; }
  .benefits { padding: 22px 5%; gap: 12px; }
  .benefits > div { justify-content: flex-start; gap: 7px; }
  .benefits > div > span { font-size: 18px; }
  .benefits strong { font-size: 9px; }
  .benefits small { font-size: 8px; }
  .section { padding: 70px 6%; }
  .section-top { align-items: flex-start; }
  .section-top h2 { font-size: 37px; }
  .product-total { display: none; }
  .shop-toolbar { margin: 30px 0 20px; }
  .shop-tools { width: 100%; }
  .search-box { flex: 1; min-width: 0; }
  .shop-tools select { max-width: 150px; }
  .product-grid { gap: 22px 12px; }
  .product-image { height: 230px; }
  .product-info h3 { font-size: 12px; }
  .product-price { font-size: 12px; }
  .add-btn { padding: 7px 8px; font-size: 9px; }
  .quick-view { transform: none; }
  .collection-banner { margin: 0 6% 65px; grid-template-columns: 1fr; }
  .collection-copy { padding: 42px 9%; }
  .collection-copy h2 { font-size: 38px; }
  .collection-image { min-height: 230px; height: 230px; }
  .about-section { grid-template-columns: 65px 1fr; gap: 20px; padding-top: 0; }
  .about-symbol { font-size: 60px; }
  .about-stat { grid-column: 2; border-left: 0; padding-left: 0; display: flex; align-items: center; gap: 15px; }
  .about-stat strong { font-size: 35px; }
  .footer { padding: 25px 6%; flex-wrap: wrap; }
  .footer p { order: 3; width: 100%; }
}
@media (max-width: 390px) {
  .product-image { height: 190px; }
  .category-btn { padding: 8px 11px; }
  .hero-image-wrap { height: 300px; }
  .benefits { grid-template-columns: 1fr; }
  .benefits > div { justify-content: center; }
  .modal { padding: 22px; }
  .modal-product { grid-template-columns: 1fr; }
  .modal-product img { height: 210px; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; }
}
