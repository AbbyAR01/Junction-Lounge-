// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Load menu
async function loadMenu() {
    try {
        const response = await fetch('/api/menu');
        const menu = await response.json();
        displayMenu(menu);
    } catch (error) {
        console.error('Error loading menu:', error);
    }
}

// Display menu
function displayMenu(menu) {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = menu.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-price">$${item.price.toFixed(2)}</div>
            </div>
        </div>
    `).join('');
}

// Menu categories filter
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.category-btn.active').classList.remove('active');
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        const items = document.querySelectorAll('.menu-item');
        
        items.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Order form
document.getElementById('order-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    try {
        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        alert(result.message);
        e.target.reset();
    } catch (error) {
        alert('Order failed. Please try again.');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadMenu();
});
