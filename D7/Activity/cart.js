let cart = [];

function addToCart(productName, price) {
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;  // Increase quantity if item already exists
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    renderCart();
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    renderCart();
}

function updateQuantity(productName, newQuantity) {
    const item = cart.find(item => item.name === productName);
    
    if (item) {
        item.quantity = parseInt(newQuantity);
        
        if (item.quantity <= 0) {
            removeFromCart(productName);  // Remove item if quantity is 0 or less
        } else {
            renderCart();
        }
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';  // Clear current cart display

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            ${item.name} - $${item.price} x 
            <input type="number" value="${item.quantity}" onchange="updateQuantity('${item.name}', this.value)">
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
}
