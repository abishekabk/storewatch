<script>
        let cart = [];

        function openModal(id) {
            document.getElementById(id).style.display = 'block';
        }

        function closeModal(id) {
            document.getElementById(id).style.display = 'none';
        }

        function addToCart(button) {
            const watch = button.parentElement;
            const name = watch.getAttribute('data-name');
            const price = parseFloat(watch.getAttribute('data-price'));
            
            const existingItem = cart.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, quantity: 1 });
            }
            
            updateCart();
        }

        function updateCart() {
            const cartItemsContainer = document.getElementById('cart-items');
            const cartCount = document.getElementById('cart-count');
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
                cartCount.textContent = '0';
                return;
            }
            
            let html = '<ul>';
            cart.forEach(item => {
                html += `<li>${item.name} - $${item.price} x ${item.quantity}</li>`;
            });
            html += '</ul>';
            
            cartItemsContainer.innerHTML = html;
            cartCount.textContent = cart.length;
        }

        document.getElementById('checkout-btn').addEventListener('click', () => {
            alert('Checkout functionality not implemented yet.');
        });

        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
            }
        }
    </script>