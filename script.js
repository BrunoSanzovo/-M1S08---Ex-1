document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const checkoutButton = document.querySelector('.checkout');
    const totalItemsElement = document.getElementById('totalItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const backgroundButton = document.querySelector('.change-background');

    let totalItems = 0;
    let totalPrice = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productPriceText = button.previousElementSibling.textContent.trim();
            const productPrice = parseFloat(productPriceText.replace('R$ ', '').replace('.', '').replace(',', '.'));
            totalItems++;
            totalPrice += productPrice;
            updateCart();
        });
    });

    checkoutButton.addEventListener('click', function() {
        
        alert('Compra finalizada! Total: R$ ' + totalPrice.toFixed(2));
    });

    backgroundButton.addEventListener('click', function() {
        changeBackgroundColor();
    });

    function updateCart() {
        totalItemsElement.textContent = totalItems;
        totalPriceElement.textContent = formatCurrency(totalPrice);
    }

    function formatCurrency(value) {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function changeBackgroundColor() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = '#' + randomColor;
    }
});
