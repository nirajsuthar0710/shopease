
const products = [
  {
    id: 1,
    name: "Classic Everyday T-Shirt",
    category: "Fashion",
    price: 499,
    tag: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",
    description: "A versatile everyday essential with a clean, timeless look. Easy to style and comfortable for daily wear."
  },
  {
    id: 2,
    name: "Urban Street Sneakers",
    category: "Fashion",
    price: 1299,
    tag: "POPULAR",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
    description: "A fresh streetwear-inspired sneaker design made to complement your everyday outfits."
  },
  {
    id: 3,
    name: "Minimal Smart Watch",
    category: "Tech",
    price: 1999,
    tag: "NEW ARRIVAL",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85",
    description: "A minimal watch-inspired tech accessory with a modern look for your everyday setup."
  },
  {
    id: 4,
    name: "Studio Wireless Headphones",
    category: "Tech",
    price: 999,
    tag: "GREAT PICK",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
    description: "A clean, modern headphone design for music, study sessions and everyday listening."
  },
  {
    id: 5,
    name: "Everyday Carry Backpack",
    category: "Accessories",
    price: 1499,
    tag: "ESSENTIAL",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85",
    description: "A practical backpack style for carrying your daily essentials with a simple, neat look."
  },
  {
    id: 6,
    name: "Classic Frame Sunglasses",
    category: "Accessories",
    price: 699,
    tag: "TRENDING",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=85",
    description: "A timeless accessory that adds a polished finishing touch to casual everyday outfits."
  },
  {
    id: 7,
    name: "Clean Desk Bottle",
    category: "Accessories",
    price: 399,
    tag: "EVERYDAY",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=85",
    description: "A simple reusable bottle for your desk, study table or daily routine."
  },
  {
    id: 8,
    name: "Relaxed Fit Hoodie",
    category: "Fashion",
    price: 1199,
    tag: "COMFORT PICK",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=85",
    description: "A relaxed casual layer with an easy silhouette for laid-back everyday styling."
  }
];

const $ = (selector) => document.querySelector(selector);

const productGrid = $("#productGrid");
const searchInput = $("#searchInput");
const sortSelect = $("#sortSelect");
const categoryTabs = $("#categoryTabs");
const cartDrawer = $("#cartDrawer");
const overlay = $("#overlay");
const cartItems = $("#cartItems");
const cartCount = $("#cartCount");
const drawerCount = $("#drawerCount");
const cartSubtotal = $("#cartSubtotal");
const cartEmpty = $("#cartEmpty");
const cartFooter = $("#cartFooter");
const toast = $("#toast");
const productModal = $("#productModal");

let activeCategory = "All";
let cart = loadSavedCart();
let wishlist = loadSavedWishlist();
let toastTimer;

function loadSavedCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("shopease-cart"));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function loadSavedWishlist() {
  try {
    const saved = JSON.parse(localStorage.getItem("shopease-wishlist"));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem("shopease-cart", JSON.stringify(cart));
  } catch {
    showToast("Cart could not be saved in this browser.");
  }
}

function saveWishlist() {
  try {
    localStorage.setItem("shopease-wishlist", JSON.stringify(wishlist));
  } catch {
    showToast("Wishlist could not be saved.");
  }
}

function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  let filtered = products.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  if (sortSelect.value === "low") filtered.sort((a, b) => a.price - b.price);
  if (sortSelect.value === "high") filtered.sort((a, b) => b.price - a.price);
  if (sortSelect.value === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));

  $("#productTotal").textContent = `${filtered.length.toString().padStart(2, "0")} PRODUCTS`;
  $("#emptyState").hidden = filtered.length !== 0;

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="product-tag">${product.tag}</span>
        <button class="wish-btn ${wishlist.includes(product.id) ? "active" : ""}"
          data-wish="${product.id}" aria-label="Add ${product.name} to wishlist">
          ${wishlist.includes(product.id) ? "♥" : "♡"}
        </button>
        <button class="quick-view" data-view="${product.id}">QUICK VIEW ↗</button>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <div class="product-bottom">
          <span class="product-price">${formatPrice(product.price)}</span>
          <button class="add-btn" data-add="${product.id}">ADD TO BAG +</button>
        </div>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, quantity: 1 });
  }

  saveCart();
  renderCart();
  showToast("Added to your bag!");
}

function changeQuantity(id, amount) {
  const item = cart.find(product => product.id === id);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.id !== id);
  }

  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
  showToast("Item removed from bag.");
}

function renderCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const product = products.find(product => product.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  cartCount.textContent = totalItems;
  drawerCount.textContent = `(${totalItems})`;
  cartSubtotal.textContent = formatPrice(totalPrice);

  cartEmpty.style.display = cart.length ? "none" : "block";
  cartFooter.style.display = cart.length ? "block" : "none";

  cartItems.innerHTML = cart.map(item => {
    const product = products.find(product => product.id === item.id);
    if (!product) return "";

    return `
      <div class="cart-row">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h4>${product.name}</h4>
          <p>${formatPrice(product.price)}</p>
          <div class="quantity">
            <button data-minus="${product.id}" aria-label="Decrease quantity">−</button>
            <span>${item.quantity}</span>
            <button data-plus="${product.id}" aria-label="Increase quantity">+</button>
          </div>
          <button class="remove-btn" data-remove="${product.id}">Remove</button>
        </div>
        <strong>${formatPrice(product.price * item.quantity)}</strong>
      </div>
    `;
  }).join("");
}

function openCart() {
  cartDrawer.classList.add("open");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}

function openProductDetails(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  $("#modalContent").innerHTML = `
    <div class="modal-product">
      <img src="${product.image}" alt="${product.name}">
      <div>
        <span class="product-category">${product.category}</span>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <strong>${formatPrice(product.price)}</strong>
        <button class="btn btn-dark" data-modal-add="${product.id}">Add to bag +</button>
      </div>
    </div>
  `;

  productModal.classList.add("show");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeProductDetails() {
  productModal.classList.remove("show");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}

function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item => item !== id);
    showToast("Removed from wishlist.");
  } else {
    wishlist.push(id);
    showToast("Saved to wishlist!");
  }

  saveWishlist();
  renderProducts();
}

productGrid.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  const viewButton = event.target.closest("[data-view]");
  const wishButton = event.target.closest("[data-wish]");

  if (addButton) addToCart(Number(addButton.dataset.add));
  if (viewButton) openProductDetails(Number(viewButton.dataset.view));
  if (wishButton) toggleWishlist(Number(wishButton.dataset.wish));
});

cartItems.addEventListener("click", event => {
  const plus = event.target.closest("[data-plus]");
  const minus = event.target.closest("[data-minus]");
  const remove = event.target.closest("[data-remove]");

  if (plus) changeQuantity(Number(plus.dataset.plus), 1);
  if (minus) changeQuantity(Number(minus.dataset.minus), -1);
  if (remove) removeFromCart(Number(remove.dataset.remove));
});

$("#modalContent").addEventListener("click", event => {
  const button = event.target.closest("[data-modal-add]");
  if (!button) return;

  addToCart(Number(button.dataset.modalAdd));
  closeProductDetails();
  openCart();
});

categoryTabs.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;

  categoryTabs.querySelectorAll(".category-btn").forEach(tab => {
    tab.classList.toggle("active", tab === button);
  });

  renderProducts();
});

searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);

$("#openCart").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#continueShopping").addEventListener("click", closeCart);

$("#closeModal").addEventListener("click", closeProductDetails);

overlay.addEventListener("click", () => {
  closeCart();
  closeProductDetails();
});

$("#searchFocus").addEventListener("click", () => {
  $("#shop").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => searchInput.focus(), 400);
});

$("#checkoutBtn").addEventListener("click", () => {
  if (!cart.length) return;

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => {
    const product = products.find(product => product.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  alert(
    "SHOP EASE — DEMO CHECKOUT\n\n" +
    `Items: ${itemCount}\n` +
    `Demo total: ${formatPrice(total)}\n\n` +
    "This is a portfolio demo. No real order or payment has been placed."
  );
});

$("#menuToggle").addEventListener("click", () => {
  $("#nav").classList.toggle("open");
});

$("#nav").addEventListener("click", event => {
  if (event.target.closest("a")) {
    $("#nav").classList.remove("open");
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCart();
    closeProductDetails();
    $("#nav").classList.remove("open");
  }
});

$("#year").textContent = new Date().getFullYear();

renderProducts();
renderCart();
