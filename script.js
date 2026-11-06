
const products = [
  { id: 1, name: "Classic T-Shirt", price: 499, category: "Fashion", description: "A comfortable everyday T-shirt with a timeless design.", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600" },
  { id: 2, name: "Stylish Sneakers", price: 1299, category: "Fashion", description: "Stylish sneakers for everyday comfort.", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600" },
  { id: 3, name: "Smart Watch", price: 1999, category: "Electronics", description: "A modern smartwatch for your everyday lifestyle.", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600" },
  { id: 4, name: "Headphones", price: 999, category: "Electronics", description: "Enjoy your favourite audio with stylish headphones.", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
  { id: 5, name: "Classic Sunglasses", price: 599, category: "Accessories", description: "A classic sunglasses style for everyday use.", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600" },
  { id: 6, name: "Leather Watch", price: 1499, category: "Accessories", description: "A classic watch design with a stylish strap.", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600" },
  { id: 7, name: "Casual Shoes", price: 1099, category: "Fashion", description: "Versatile casual shoes for everyday wear.", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600" },
  { id: 8, name: "Wireless Earbuds", price: 799, category: "Electronics", description: "Compact wireless earbuds with a modern design.", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600" }
];

let cart = [];

function displayProducts(list = products) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = "";

  list.forEach(product => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">

        <div class="product-info">
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
          <button onclick="showProductDetails(${product.id})">View Details</button>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

function showProductDetails(id) {
  const product = products.find(p => p.id === id);
  const modal = document.getElementById("product-modal");
  const content = document.getElementById("product-modal-content");

  if (!product || !modal || !content) {
    alert("Product details section load nahi hua. Please refresh the page.");
    return;
  }

  content.innerHTML = `
    <button class="modal-close" onclick="closeProductDetails()">×</button>
    <img src="${product.image}" alt="${product.name}">
    <div class="modal-product-info">
      <span class="modal-category">${product.category}</span>
      <h2>${product.name}</h2>
      <p class="modal-description">${product.description}</p>
      <h3>₹${product.price}</h3>
      <button class="checkout-button" onclick="addToCart(${product.id}); closeProductDetails();">
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
  const product = products.find(p => p.id === id);
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
  const item = cart.find(p => p.id === id);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(p => p.id !== id);
  }

  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(p => p.id !== id);
  updateCart();
}

function updateCart() {
  const items = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");
  const countElement = document.getElementById("cart-count");

  let total = 0;
  let count = 0;

  if (items) {
    items.innerHTML = "";

    if (cart.length === 0) {
      items.innerHTML = "<p>Your cart is empty.</p>";
    }

    cart.forEach(item => {
      const subtotal = item.price * item.quantity;
      total += subtotal;
      count += item.quantity;

      items.innerHTML += `
        <div class="cart-row">
          <div>
            <strong>${item.name}</strong>
            <p>₹${item.price} × ${item.quantity} = ₹${subtotal}</p>
          </div>
          <div class="quantity-controls">
            <button onclick="changeQuantity(${item.id}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${item.id}, 1)">+</button>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        </div>
      `;
    });
  } else {
    cart.forEach(item => {
      total += item.price * item.quantity;
      count += item.quantity;
    });
  }

  if (totalElement) totalElement.textContent = total;
  if (countElement) countElement.textContent = count;

  updateCheckoutSummary();
}

function updateCheckoutSummary() {
  const items = document.getElementById("checkout-items");
  const totalElement = document.getElementById("checkout-total");
  if (!items || !totalElement) return;

  let total = 0;
  items.innerHTML = "";

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    items.innerHTML += `<p>${item.name} × ${item.quantity} — ₹${subtotal}</p>`;
  });

  totalElement.textContent = total;
}

function showCart() {
  document.getElementById("cart-section")?.scrollIntoView({ behavior: "smooth" });
}

function filterCategory(category) {
  displayProducts(category === "All" ? products : products.filter(p => p.category === category));
}

function searchProducts() {
  const search = document.getElementById("search")?.value.toLowerCase() || "";
  displayProducts(products.filter(p =>
    p.name.toLowerCase().includes(search) ||
    p.category.toLowerCase().includes(search)
  ));
}

function showCheckout() {
  if (cart.length === 0) {
    alert("Please add a product first.");
    return;
  }

  const section = document.getElementById("checkout-section");
  if (!section) return;

  section.style.display = "block";
  updateCheckoutSummary();
  section.scrollIntoView({ behavior: "smooth" });
}

function closeCheckout() {
  const section = document.getElementById("checkout-section");
  if (section) section.style.display = "none";
  showCart();
}

function placeOrder(event) {
  event.preventDefault();

  const name = document.getElementById("customer-name").value.trim();
  const phone = document.getElementById("customer-phone").value.trim();
  const address = document.getElementById("customer-address").value.trim();

  if (!name || !/^[0-9]{10}$/.test(phone) || !address) {
    alert("Please enter valid details.");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  document.getElementById("order-message").textContent =
    `Thank you ${name}! Your demo order of ₹${total} has been placed.`;

  cart = [];
  updateCart();
  document.getElementById("checkout-form").reset();
  document.getElementById("checkout-form").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
  const checkout = document.getElementById("checkout-section");
  if (checkout) checkout.style.display = "none";

  const modal = document.getElementById("product-modal");
  if (modal) {
    modal.addEventListener("click", function(event) {
      if (event.target === modal) closeProductDetails();
    });
  }

  displayProducts();
  updateCart();
});
