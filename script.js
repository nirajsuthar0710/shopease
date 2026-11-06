
const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 499,
    category: "Fashion",
    description: "A comfortable everyday T-shirt with a simple and timeless design.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
  },
  {
    id: 2,
    name: "Stylish Sneakers",
    price: 1299,
    category: "Fashion",
    description: "Stylish everyday sneakers designed for comfort and casual outfits.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 1999,
    category: "Electronics",
    description: "A modern smartwatch design for your everyday lifestyle.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
  },
  {
    id: 4,
    name: "Headphones",
    price: 999,
    category: "Electronics",
    description: "Enjoy your favourite audio with these stylish headphones.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
  },
  {
    id: 5,
    name: "Classic Sunglasses",
    price: 599,
    category: "Accessories",
    description: "A classic sunglasses style for everyday use.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
  },
  {
    id: 6,
    name: "Leather Watch",
    price: 1499,
    category: "Accessories",
    description: "A classic watch design with a stylish leather-look strap.",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600"
  },
  {
    id: 7,
    name: "Casual Shoes",
    price: 1099,
    category: "Fashion",
    description: "Versatile casual shoes for your everyday wardrobe.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600"
  },
  {
    id: 8,
    name: "Wireless Earbuds",
    price: 799,
    category: "Electronics",
    description: "Compact wireless earbuds with a clean and modern design.",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600"
  }
];

let cart = [];

function displayProducts(list = products) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = "<p>No products found.</p>";
    return;
  }

  list.forEach(product => {
    grid.innerHTML += `
      <div class="product-card">
        <img
          src="${product.image}"
          alt="${product.name}"
          onclick="showProductDetails(${product.id})"
          style="cursor:pointer"
        >

        <div class="product-info">
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>

          <button onclick="showProductDetails(${product.id})">
            View Details
          </button>

          <button onclick="addToCart(${product.id})">
            Add to Cart
          </button>
        </div>
      </div>
    `;
  });
}

function showProductDetails(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  const modal = document.getElementById("product-modal");
  const content = document.getElementById("product-modal-content");

  if (!modal || !content) return;

  content.innerHTML = `
    <button class="modal-close" onclick="closeProductDetails()">×</button>

    <img src="${product.image}" alt="${product.name}">

    <div class="modal-product-info">
      <span class="modal-category">${product.category}</span>
      <h2>${product.name}</h2>
      <p class="modal-description">${product.description}</p>
      <h3>₹${product.price}</h3>

      <button class="checkout-button"
        onclick="addToCart(${product.id}); closeProductDetails();">
        Add to Cart
      </button>
    </div>
  `;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeProductDetails() {
  const modal = document.getElementById("product-modal");

  if (modal) modal.style.display = "none";

  document.body.style.overflow = "";
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

function changeQuantity(id, amount) {
  const item = cart.find(product => product.id === id);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.id !== id);
  }

  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");

  let total = 0;
  let count = 0;

  if (cartItems) {
    cartItems.innerHTML = "";

    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      count += item.quantity;

      cartItems.innerHTML += `
        <div class="cart-row">
          <div>
            <div class="cart-product-name">${item.name}</div>
            <div>₹${item.price} × ${item.quantity} = ₹${itemTotal}</div>
          </div>

          <div class="quantity-controls">
            <button onclick="changeQuantity(${item.id}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${item.id}, 1)">+</button>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">
              Remove
            </button>
          </div>
        </div>
      `;
    });

    if (cart.length === 0) {
      cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }
  } else {
    cart.forEach(item => {
      total += item.price * item.quantity;
      count += item.quantity;
    });
  }

  if (cartTotal) cartTotal.textContent = total;
  if (cartCount) cartCount.textContent = count;

  updateCheckoutSummary();
}

function updateCheckoutSummary() {
  const checkoutItems = document.getElementById("checkout-items");
  const checkoutTotal = document.getElementById("checkout-total");

  if (!checkoutItems || !checkoutTotal) return;

  checkoutItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    checkoutItems.innerHTML += `
      <div class="summary-item">
        <span>${item.name} × ${item.quantity}</span>
        <strong>₹${itemTotal}</strong>
      </div>
    `;
  });

  checkoutTotal.textContent = total;
}

function showCart() {
  const section = document.getElementById("cart-section");

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function filterCategory(category) {
  const filtered = category === "All"
    ? products
    : products.filter(item => item.category === category);

  displayProducts(filtered);
}

function searchProducts() {
  const searchBox = document.getElementById("search");
  if (!searchBox) return;

  const search = searchBox.value.toLowerCase();

  const filtered = products.filter(item =>
    item.name.toLowerCase().includes(search) ||
    item.category.toLowerCase().includes(search)
  );

  displayProducts(filtered);
}

function showCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add a product first.");
    return;
  }

  const section = document.getElementById("checkout-section");

  if (!section) {
    alert("Checkout section missing. Please check index.html.");
    return;
  }

  section.style.display = "block";

  const message = document.getElementById("order-message");
  if (message) message.textContent = "";

  const form = document.getElementById("checkout-form");
  if (form) form.style.display = "flex";

  updateCheckoutSummary();

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function closeCheckout() {
  const section = document.getElementById("checkout-section");

  if (section) section.style.display = "none";

  showCart();
}

function placeOrder(event) {
  event.preventDefault();

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const name = document.getElementById("customer-name").value.trim();
  const phone = document.getElementById("customer-phone").value.trim();
  const address = document.getElementById("customer-address").value.trim();

  if (!name || !/^[0-9]{10}$/.test(phone) || !address) {
    alert("Please enter valid details.");
    return;
  }

  const orderTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  document.getElementById("order-message").textContent =
    `Thank you, ${name}! Your demo order of ₹${orderTotal} has been placed successfully.`;

  cart = [];
  updateCart();

  document.getElementById("checkout-form").reset();
  document.getElementById("checkout-form").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const checkout = document.getElementById("checkout-section");

  if (checkout) checkout.style.display = "none";

  const modal = document.createElement("div");
  modal.id = "product-modal";
  modal.className = "product-modal";

  modal.innerHTML = `
    <div id="product-modal-content" class="product-modal-content"></div>
  `;

  modal.addEventListener("click", function(event) {
    if (event.target === modal) {
      closeProductDetails();
    }
  });

  document.body.appendChild(modal);

  displayProducts();
  updateCart();
});
