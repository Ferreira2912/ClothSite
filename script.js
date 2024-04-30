
function addToCart(productId) {
    // Retrieve the cart from local storage or initialize a new array if nothing exists
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add the productId to the cart array
    cart.push(productId);
    
    // Store the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Optionally, alert the user
    alert('Product added to cart!');
}

document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    const sizeFilter = document.getElementById('size');
    const colorFilter = document.getElementById('color');

    function filterProducts() {
        const size = sizeFilter.value;
        const color = colorFilter.value;

        products.forEach(product => {
            const matchesSize = size === 'all' || product.dataset.size === size;
            const matchesColor = color === 'all' || product.dataset.color === color;

            if (matchesSize && matchesColor) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    }

    sizeFilter.addEventListener('change', filterProducts);
    colorFilter.addEventListener('change', filterProducts);
});
