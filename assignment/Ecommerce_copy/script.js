document.addEventListener("DOMContentLoaded", async () => {
    const productsContainer = document.getElementById("products-section");
    const cartContainer = document.getElementById("cart");
    const cartSection = document.getElementById("cart-section");
    const showProductsBtn = document.getElementById("show-products");
    const showCartBtn = document.getElementById("show-cart");
    let cart = [];
    
    async function fetchProducts() {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        displayProducts(products);
    }

    function displayProducts(products) {
        productsContainer.innerHTML = "";
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("bg-white", "p-4", "rounded", "shadow", "text-center");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="w-full h-40 object-contain mb-2">
                <h3 class="text-lg font-semibold">${product.title}</h3>
                <p class="text-gray-600">$${product.price}</p>
                <button class="bg-blue-500 text-white px-4 py-2 mt-2 rounded add-to-cart" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}">Add to Cart</button>
            `;
            productsContainer.appendChild(productCard);
        });
        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", addToCart);
        });
    }

    function addToCart(event) {
        const id = event.target.getAttribute("data-id");
        const title = event.target.getAttribute("data-title");
        const price = event.target.getAttribute("data-price");
        
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, title, price, quantity: 1 });
        }
        updateCart();
        showCart();
    }

    function updateCart() {
        cartContainer.innerHTML = "";
        cart.forEach(item => {
            const cartItem = document.createElement("li");
            cartItem.classList.add("border-b", "py-2", "flex", "justify-between");
            cartItem.innerHTML = `
                <span>${item.title} (x${item.quantity})</span>
                <span class="font-bold">$${(item.price * item.quantity).toFixed(2)}</span>
            `;
            cartContainer.appendChild(cartItem);
        });
    }

    function showCart() {
        productsContainer.classList.add("hidden");
        cartSection.classList.remove("hidden");
    }

    function showProducts() {
        productsContainer.classList.remove("hidden");
        cartSection.classList.add("hidden");
    }

    showProductsBtn.addEventListener("click", showProducts);
    showCartBtn.addEventListener("click", showCart);

    fetchProducts();
});