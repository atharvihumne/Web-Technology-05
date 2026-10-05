```javascript
const products = [
{ id: 1, name: "Notebook", price: 40, icon: "📓" },
{ id: 2, name: "Pen", price: 10, icon: "🖊️" },
{ id: 3, name: "Travel Bag", price: 500, icon: "🎒" },
{ id: 4, name: "Water Bottle", price: 150, icon: "🧴" }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const totalPriceEl = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");

function displayProducts() {
productList.innerHTML = products.map(product => `
<div class="product-card">
<div class="product-icon">${product.icon}</div>
<h3>${product.name}</h3>
<div class="price">₹${product.price}</div>
<button onclick="addToCart(${product.id})">Add to Cart</button>
</div>
`).join("");
}

function addToCart(id) {
const item = products.find(product => product.id === id);
cart.push(item);
displayCart();
}

function removeFromCart(id) {
const index = cart.findIndex(item => item.id === id);

if (index !== -1) {
cart.splice(index, 1);
}

displayCart();
}

function calculateTotal() {
return cart.reduce((sum, item) => sum + item.price, 0);
}

function displayCart() {
cartList.innerHTML = cart.map(item => `
<li>
<span>${item.name} - ₹${item.price}</span>
<button onclick="removeFromCart(${item.id})">✕</button>
</li>
`).join("");

totalPriceEl.textContent = calculateTotal();
cartCount.textContent = cart.length;
}

displayProducts();
displayCart();
```

