
const products = [
  {
    name: "Classic T-Shirt",
    price: 499,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
  },
  {
    name: "Stylish Sneakers",
    price: 1299,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
  },
  {
    name: "Smart Watch",
    price: 1999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
  },
  {
    name: "Headphones",
    price: 999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
  },
  {
    name: "Classic Sunglasses",
    price: 599,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
  },
  {
    name: "Leather Watch",
    price: 1499,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600"
  },
  {
    name: "Casual Shoes",
    price: 1099,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600"
  },
  {
    name: "Wireless Earbuds",
    price: 799,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600"
  }
];

let cart = [];
let currentCategory = "All";

function displayProducts(list) {
  const grid = document.getElementById("product-grid");

  if (list.length === 0) {
    grid.innerHTML = "<p>No products found.</p>";
    return;
  }

  grid.innerHTML = list.map(product => {
    const index = products.indexOf(product);

    return `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
          <button class="add-btn" onclick="addToCart(${index})">
            Add to Cart
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function filterProducts(category) {
  currentCategory = category;
  document.getElementById("search").value = "";
  const filtered = category === "All"
    ? products
    : products.filter(p => p.category === category);

  displayProducts(filtered);
}

function searchProducts() {
  const search = document.getElementById("search").value.toLowerCase();

  const filtered = products.filter(product => {
    const matchesName = product.name.toLowerCase().includes(search);
    const matchesCategory = currentCategory === "All" ||
      product.category === currentCategory;

    return matchesName && matchesCategory;
  });

  displayProducts(filtered);
}

function addToCart(index) {
  const product = products[index];
  const existing = cart.find(item => item.name === product.name);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  document.getElementById("cart-count").textContent = count;
  document.getElementById("cart-total").textContent = total;

  const cartItems = document.getElementById("cart-items");

  if (cart.length === 0) {
    cartItems.textContent = "Your cart is empty.";
    return;
  }

  cartItems.innerHTML = cart.map((item, index) => `
    <div class="cart-row">
      <span>${item.name} × ${item.quantity}</span>
      <span>₹${item.price * item.quantity}</span>
      <button class="remove-btn" onclick="removeFromCart(${index})">
        Remove
      </button>
    </div>
  `).join("");
}

function showCart() {
  document.getElementById("cart-section").scrollIntoView({
    behavior: "smooth"
  });
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("This is a demo shopping website. Real payment is not enabled yet.");
}

displayProducts(products);
updateCart();
