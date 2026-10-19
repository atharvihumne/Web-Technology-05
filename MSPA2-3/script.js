// Array of product objects
let cart = [
    { id: 1, name: "Laptop", price: 50000, quantity: 1 },
    { id: 2, name: "Mouse", price: 800, quantity: 2 }
];

let nextId = 3;

// Display cart items
function renderCart() {
    let table = document.getElementById("cartTableBody");
    table.innerHTML = "";

    cart.forEach(function(product) {
        table.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td>${product.price * product.quantity}</td>
                <td>
                    <button onclick="removeProduct(${product.id})">
                        Remove
                    </button>
                </td>
            </tr>
        `;
    });

    // Get product names using map()
    let names = cart.map(function(product) {
        return product.name;
    });

    document.getElementById("extractedNames").textContent =
        names.length ? names.join(", ") : "Cart is empty";

    // Calculate total using reduce()
    let total = cart.reduce(function(sum, product) {
        return sum + product.price * product.quantity;
    }, 0);

    document.getElementById("totalPrice").textContent = total;
}

// Add product using push()
document.getElementById("addProductForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("productName").value;
    let price = Number(document.getElementById("productPrice").value);
    let quantity = Number(document.getElementById("productQty").value);

    cart.push({
        id: nextId++,
        name: name,
        price: price,
        quantity: quantity
    });

    document.getElementById("addProductForm").reset();

    renderCart();
});

// Remove product using filter()
function removeProduct(id) {
    cart = cart.filter(function(product) {
        return product.id !== id;
    });

    renderCart();
}

// Display cart when page loads
document.addEventListener("DOMContentLoaded", renderCart);
