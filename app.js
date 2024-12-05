let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add items to the cart
function addToCart(id, name, price) {
    let product = { id, name, price };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(name + ' added to cart!');
}

// Function to update cart count in the header
function updateCartCount() {
    document.getElementById('cartCount').innerText = cart.length;
}

// Function to display cart items on the cart page
function displayCartItems() {
    let cartItemsDiv = document.getElementById('cartItems');
    let totalPrice = 0;

    if (cartItemsDiv) {
        cartItemsDiv.innerHTML = '';
        cart.forEach((item) => {
            let itemDiv = document.createElement('div');
            itemDiv.innerHTML = `<p>${item.name} - $${item.price}</p>`;
            cartItemsDiv.appendChild(itemDiv);
            totalPrice += item.price;
        });

        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    }
}

// Initialize functions when the page loads
window.onload = function() {
    updateCartCount();
    displayCartItems();
}
