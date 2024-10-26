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
// this is the alert for invalid order.
function orderAlert() {
    const quantity = parseInt(quantityInput.value);
    if (quantity < 1) {
        alert(' Enter a valid quantity please!!.');
        return false;
    }
    return true;
}

// Task 4 Handle Order Submission

const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

placeOrderButton.addEventListener('click', function() {
    if (!orderAlert())
     return;

    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPrice = totalPriceElement.textContent;
    
    orderSummary.textContent = `Thank you for ordering ${quantity} of ${selectedProduct}. Your Total today is $${totalPrice} Thank you for shopping at Bürobedarf!!!! `;
});