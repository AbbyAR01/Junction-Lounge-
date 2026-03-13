// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// ===== MOBILE MENU =====
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => document.getElementById('nav-menu').classList.remove('open'));
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== FULL MENU DATA =====
const menuData = [
    // Local Food
    { name: "Banku with Fresh Pepper", category: "Local Food", description: "Served with Grilled Tilapia — a Ghanaian classic", price: 100.00, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400" },
    { name: "Fufu with Light Soup", category: "Local Food", description: "Served with Fish / Tilapia / Goat", price: 50.00, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400" },
    { name: "Grilled Tilapia with Banku", category: "Local Food", description: "Freshly grilled tilapia, perfectly seasoned", price: 100.00, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400" },
    { name: "Anguamu (Braised Rice)", category: "Local Food", description: "Traditional Ghanaian braised rice", price: 80.00, image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400" },
    { name: "Banku with Okro", category: "Local Food", description: "Served with Fish / Tilapia / Goat", price: 50.00, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400" },
    { name: "Boiled Yam & Corned Beef Stew", category: "Local Food", description: "Classic Ghanaian comfort meal", price: 80.00, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400" },

    // Main Dish
    { name: "Pan Fried Snapper (Big)", category: "Main Dish", description: "Whole pan fried red snapper with side of choice", price: 150.00, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400" },
    { name: "Jollof Rice with Chicken", category: "Main Dish", description: "Ghanaian jollof rice with chicken", price: 70.00, image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400" },
    { name: "Jollof Rice & Tilapia", category: "Main Dish", description: "Jollof rice served with fresh tilapia", price: 120.00, image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400" },
    { name: "Yam Chips and Chicken", category: "Main Dish", description: "Crispy yam chips with seasoned chicken", price: 65.00, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400" },
    { name: "Grilled Tilapia", category: "Main Dish", description: "Freshly grilled tilapia fish", price: 70.00, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400" },
    { name: "Fries and Chicken", category: "Main Dish", description: "Golden fries with perfectly seasoned chicken", price: 65.00, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400" },

    // Starters
    { name: "Spring Rolls", category: "Starters", description: "Crispy golden spring rolls", price: 30.00, image: "https://images.unsplash.com/photo-1606525437078-ab2b93f08878?w=400" },
    { name: "Peppered Goat", category: "Starters", description: "Spicy peppered goat meat", price: 60.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
    { name: "Chicken Wings", category: "Starters", description: "Spicy / Green Chilli / BBQ", price: 40.00, image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400" },
    { name: "Kelewele", category: "Starters", description: "Spiced fried plantain cubes", price: 30.00, image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400" },
    { name: "Peppered Snails", category: "Starters", description: "Seasoned peppered snails", price: 50.00, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400" },
    { name: "Pork Chops", category: "Starters", description: "Grilled seasoned pork chops", price: 50.00, image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=400" },

    // Seafood
    { name: "Seafood Platter", category: "Seafood", description: "A generous platter of mixed fresh seafood", price: 150.00, image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400" },
    { name: "Seafood Fried Rice", category: "Seafood", description: "Fried rice loaded with seafood", price: 100.00, image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400" },
    { name: "Seafood Jollof Rice", category: "Seafood", description: "Jollof rice with mixed seafood", price: 100.00, image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400" },
    { name: "Seafood Fante Fante", category: "Seafood", description: "Traditional Fante Fante with side of choice", price: 120.00, image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400" },

    // Salads
    { name: "Ghanaian Mixed Salad", category: "Salads", description: "Fresh local mixed salad", price: 80.00, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400" },
    { name: "Greek Salad", category: "Salads", description: "Classic Greek salad with feta", price: 60.00, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400" },
    { name: "Chicken Salad", category: "Salads", description: "Grilled chicken with fresh salad", price: 60.00, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
    { name: "Tuna Salad", category: "Salads", description: "Fresh tuna with mixed greens", price: 50.00, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },

    // Pasta
    { name: "Spaghetti Bolognese", category: "Pasta", description: "Classic bolognese meat sauce", price: 80.00, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400" },
    { name: "Macaroni & Cheese", category: "Pasta", description: "Creamy homemade mac and cheese", price: 80.00, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400" },
    { name: "Spaghetti Stir Fry", category: "Pasta", description: "Stir fried spaghetti with veggies", price: 80.00, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400" },
    { name: "Spaghetti / Noodles", category: "Pasta", description: "Classic spaghetti or noodles", price: 65.00, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400" },

    // Cocktails
    { name: "Quickie (House Special)", category: "Cocktails", description: "Junction Lounge signature cocktail", price: 80.00, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" },
    { name: "Pina Colada", category: "Cocktails", description: "Pineapple juice, Malibu, coconut cream, ice", price: 90.00, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" },
    { name: "Margarita", category: "Cocktails", description: "Tequila, lime juice, Cointreau, lime slice, salt", price: 90.00, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" },
    { name: "Long Island Iced Tea", category: "Cocktails", description: "Classic Long Island cocktail", price: 60.00, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" },

    // Smoothies
    { name: "Mango Smoothie", category: "Smoothies & Shakes", description: "Creamy fresh mango smoothie", price: 30.00, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400" },
    { name: "Fruit Cocktail Juice", category: "Smoothies & Shakes", description: "Mixed fruit cocktail juice", price: 30.00, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400" },
    { name: "Pineapple Shake", category: "Smoothies & Shakes", description: "Refreshing pineapple milkshake", price: 30.00, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400" },
    { name: "Orange Juice", category: "Smoothies & Shakes", description: "Freshly squeezed orange juice", price: 30.00, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400" },

    // Shisha
    { name: "Apple Mint Shisha", category: "Shisha", description: "Apple mint flavoured shisha experience", price: 80.00, image: "https://images.unsplash.com/photo-1567335406970-f56e52a71bce?w=400" },
    { name: "Grape Shisha", category: "Shisha", description: "Smooth grape flavoured shisha", price: 80.00, image: "https://images.unsplash.com/photo-1567335406970-f56e52a71bce?w=400" },
    { name: "Lemon Mint Shisha", category: "Shisha", description: "Refreshing lemon mint shisha", price: 80.00, image: "https://images.unsplash.com/photo-1567335406970-f56e52a71bce?w=400" },

    // Breakfast
    { name: "Breakfast Option 2", category: "Breakfast", description: "Fried egg, bacon, toast, baked beans, fresh juice + hot drink", price: 80.00, image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400" },
    { name: "Breakfast Option 4", category: "Breakfast", description: "Scrambled egg, bacon, potatoes, vegetables, bread, tea/milo/coffee + seasonal fruit tray", price: 90.00, image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400" },
    { name: "Breakfast Option 1", category: "Breakfast", description: "Tuna sandwich, 2 eggs, baked beans, fresh juice + hot drink", price: 70.00, image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400" },
    { name: "Breakfast Option 5", category: "Breakfast", description: "2 pancakes with jam, fruit cut, juice + hot drink", price: 60.00, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400" },
];

// Get unique categories
const categories = ['All', ...new Set(menuData.map(i => i.category))];

// Show only 2 items per category for homepage preview
function getFeaturedItems(category) {
    if (category === 'All') {
        // 2 from each category
        const seen = {};
        return menuData.filter(item => {
            if (!seen[item.category]) seen[item.category] = 0;
            if (seen[item.category] < 2) { seen[item.category]++; return true; }
            return false;
        });
    }
    return menuData.filter(i => i.category === category).slice(0, 6);
}

function renderMenuCard(item) {
    return `
        <div class="menu-card">
            <img class="menu-card-img" src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400'">
            <div class="menu-card-body">
                <span class="menu-card-cat">${item.category}</span>
                <div class="menu-card-name">${item.name}</div>
                <div class="menu-card-desc">${item.description}</div>
                <div class="menu-card-price">GH₵${item.price.toFixed(2)}</div>
            </div>
        </div>
    `;
}

function buildMenu(category = 'All') {
    const items = getFeaturedItems(category);
    document.getElementById('menu-grid').innerHTML = items.map(renderMenuCard).join('');
}

function buildTabs() {
    const tabsEl = document.getElementById('menu-tabs');
    tabsEl.innerHTML = categories.map(cat => `
        <button class="tab-btn ${cat === 'All' ? 'active' : ''}" data-cat="${cat}">${cat}</button>
    `).join('');

    tabsEl.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            tabsEl.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            buildMenu(btn.dataset.cat);
        });
    });
}

// ===== ORDER FORM =====
document.getElementById('order-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! We have received your order request.\nWe will call you shortly to confirm.\n\nPhone: +233 53 154 3058');
    e.target.reset();
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    buildTabs();
    buildMenu();
});
