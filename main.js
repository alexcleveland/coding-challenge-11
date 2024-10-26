// Task 2 Add Event Listener for Product Selection 
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');

productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

// Task 3 Calculate and update total price dynamically based on product and quantity
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;
      totalPriceElement.textContent = totalPrice.toFixed(2);
}
