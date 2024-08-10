document.addEventListener('DOMContentLoaded', () => {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const productGrid = document.getElementById('product-grid');
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                
                productItem.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>$${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                `;
                
                productGrid.appendChild(productItem);
            });

            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', addToCart);
            });
        })
        .catch(error => console.error('Error fetching products:', error));

    document.getElementById('checkout-form').addEventListener('submit', handleCheckout);
});

const cart = [];

function addToCart(event) {
    const button = event.target;
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    const existingProduct = cart.find(product => product.name === name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>No items in cart.</p>';
        return;
    }

    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        cartItem.innerHTML = `
            <p>${product.name} - $${product.price.toFixed(2)} x ${product.quantity}</p>
            <button class="increase-quantity" data-name="${product.name}">+</button>
            <button class="decrease-quantity" data-name="${product.name}">-</button>
            <button class="remove-item" data-name="${product.name}">Remove</button>
        `;
        
        cartItems.appendChild(cartItem);
    });

    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });

    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeItem);
    });
}

function increaseQuantity(event) {
    const button = event.target;
    const name = button.getAttribute('data-name');

    const product = cart.find(product => product.name === name);
    if (product) {
        product.quantity += 1;
    }

    updateCartDisplay();
}

function decreaseQuantity(event) {
    const button = event.target;
    const name = button.getAttribute('data-name');

    const product = cart.find(product => product.name === name);
    if (product && product.quantity > 1) {
        product.quantity -= 1;
    } else if (product) {
        removeItem(event);
    }

    updateCartDisplay();
}

function removeItem(event) {
    const button = event.target;
    const name = button.getAttribute('data-name');

    const productIndex = cart.findIndex(product => product.name === name);
    if (productIndex !== -1) {
        cart.splice(productIndex, 1);
    }

    updateCartDisplay();
}

function handleCheckout(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;

    const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    const orderDetails = `
        Name: ${name}<br>
        Address: ${address}<br>
        Payment Method: ${paymentMethod === 'online' ? 'Online Payment' : 'Cash on Delivery'}<br>
        Products:<br>
        ${cart.map(product => `${product.name} - $${product.price.toFixed(2)} x ${product.quantity}`).join('<br>')}
    `;

    document.getElementById('order-details').innerHTML = orderDetails;
    document.getElementById('total-amount').innerHTML = `Total Amount: $${totalAmount.toFixed(2)}`;
    document.getElementById('confirmation-message').classList.remove('hidden');
    document.getElementById('checkout-form').classList.add('hidden');
}
