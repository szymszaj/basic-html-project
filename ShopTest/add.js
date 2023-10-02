const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const cartItemsList = document.querySelector('.cart-items');
        const totalElement = document.getElementById('total');
        let total = 0;

        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const price = parseFloat(button.getAttribute('data-price'));
                total += price;
                totalElement.textContent = `Suma: $${total.toFixed(2)}`;

                const productName = button.parentNode.querySelector('h2').textContent;
                const listItem = document.createElement('li');
                listItem.textContent = `${productName} - $${price.toFixed(2)}`;
                cartItemsList.appendChild(listItem);
            });
        });