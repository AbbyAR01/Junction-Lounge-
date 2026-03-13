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

// Real Junction Lounge Menu Data (prices in GHC)
const menuData = [
    // Starters
    { name: "Spring Rolls", category: "Starters", description: "Crispy golden spring rolls", price: 30.00, image: "https://images.unsplash.com/photo-1606525437078-ab2b93f08878?w=400" },
    { name: "Peppered Goat", category: "Starters", description: "Spicy peppered goat meat", price: 60.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
    { name: "Peppered Snails", category: "Starters", description: "Seasoned peppered snails", price: 50.00, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400" },
    { name: "Chicken Wings", category: "Starters", description: "Spicy / Green Chilli / BBQ", price: 40.00, image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400" },
    { name: "Kelewele", category: "Starters", description: "Spiced fried plantain cubes", price: 30.00, image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400" },
    { name: "Pork Chops", category: "Starters", description: "Grilled seasoned pork chops", price: 50.00, image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=400" },

    // Salads
    { name: "Tuna Salad", category: "Salads", description: "Fresh tuna with mixed greens", price: 50.00, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
    { name: "Chicken Salad", category: "Salads", description: "Grilled chicken with fresh salad", price: 60.00, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
    { name: "Greek Salad", category: "Salads", description: "Classic Greek salad with feta", price: 60.00, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400" },
    { name: "Ghanaian Mixed Salad", category: "Salads", description: "Fresh local mixed salad", price: 80.00, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400" },

    // Local Food
    { name: "Fufu with Light Soup", category: "Local Food", description: "Served with Fish / Tilapia / Goat", price: 50.00, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400" },
    { name: "Banku with Okro", category: "Local Food", description: "Served with Fish / Tilapia / Goat", price: 50.00, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400" },
    { name: "Banku with Fresh Pepper", category: "Local Food", description: "Served with Grilled Tilapia", price: 100.00, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400" },
    { name: "Banku with Fried Fish", category: "Local Food", description: "Crispy fried fish with banku", price: 70.00, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400" },
    { name: "Grilled Tilapia with Banku", category: "Local Food", description: "Perfectly grilled tilapia", price: 100.00, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400" },
    { name: "Anguamu (Braised Rice)", category: "Local Food", description: "Traditional Ghanaian braised rice", price: 80.00, image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400" },
    { name: "Boiled Yam & Corned Beef Stew", category: "Local Food", description: "Classic comfort meal", price: 80.00, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400" },

    // Main Dish
    { name: "Pan Fried Snapper (Big)", category: "Main Dish", description: "Whole pan fried red snapper", price: 150.00, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400" },
    { name: "Pan Fried Snapper (Medium)", category: "Main Dish", description: "With side of choice", price: 100.00, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400" },
    { name: "Jollof / Fried Rice with Chicken", category: "Main Dish", description: "Ghanaian jollof or fried rice", price: 70.00, image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400" },
    { name: "Assorted Jollof / Fried Rice", category: "Main Dish", description: "With assorted meats", price: 80.00, image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400" },
    { name: "Jollof Rice & Tilapia", category: "Main Dish", description: "Jollof rice served with tilapia", price: 120.00, image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400" },
    { name: "Grilled Tilapia", category: "Main Dish", description: "Freshly grilled tilapia fish", price: 70.00, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400" },
    { name: "Yam Chips and Chicken", category: "Main Dish", description: "Crispy yam chips with chicken", price: 65.00, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400" },
    { name: "Fries and Chicken", category: "Main Dish", description: "Golden fries with chicken", price: 65.00, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400" },
    { name: "Chicken Wings / Chops", category: "Main Dish", description: "Crispy chicken wings or chops", price: 40.00, image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400" },

    // Seafood
    { name: "Seafood Fried Rice", category: "Seafood", description: "Fried rice loaded with seafood", price: 100.00, image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400" },
    { name: "Seafood Jollof Rice", category: "Seafood", description: "Jollof rice with mixed seafood", price: 100.00, image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400" },
    { name: "Seafood Platter", category: "Seafood", description: "A generous platter of mixed seafood", price: 150.00, image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400" },
    { name: "Seafood Fante Fante", category: "Seafood", description: "With side of choice", price: 120.00, image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400" },

    // Pasta
    { name: "Spaghetti / Noodles", category: "Pasta", description: "Classic spaghetti or noodles", price: 65.00, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400" },
    { name: "Spaghetti Stir Fry", category: "Pasta", description: "Stir fried spaghetti with veggies", price: 80.00, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400" },
    { name: "Spaghetti Bolognese", category: "Pasta", description: "Classic bolognese meat sauce", price: 80.00, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400" },
    { name: "Macaroni & Cheese", category: "Pasta", description: "Creamy homemade mac and cheese", price: 80.00, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400" },

    // Vegetable Dishes
    { name: "Braised Rice with Eggs / Egg Stew", category: "Vegetable Dishes", description: "Braised rice served with egg stew", price: 80.00, image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400" },
    { name: "Boiled Yam with Eggs / Egg Stew", category: "Vegetable Dishes", description: "Boiled yam with egg stew", price: 70.00, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400" },
    { name: "Grilled Chicken", category: "Vegetable Dishes", description: "Juicy grilled chicken", price: 80.00, image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400" },
    { name: "Beef Steak", category: "Vegetable Dishes", description: "With carbohydrate of choice", price: 100.00, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
    { name: "Vegetable Curry", category: "Vegetable Dishes", description: "With side of choice", price: 100.00, image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400" },
    { name: "Palava Sauce", category: "Vegetable Dishes", description: "Traditional Ghanaian palava sauce", price: 60.00, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400" },

    // Breakfast
    { name: "Breakfast Option 1", category: "Breakfast", description: "Tuna sandwich, 2 eggs, baked beans, fresh juice + hot drink", price: 70.00, image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400" },
    { name: "Breakfast Option 2", category: "Breakfast", description: "Fried egg, bacon, 2 slices of toast, baked beans, fresh juice + hot drink", price: 80.00, image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400" },
    { name: "Breakfast Option 3", category: "Breakfast", description: "Eggs, sausage, grilled tomatoes, slice of bread, fresh juice + hot drink", price: 70.00, image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400" },
    { name: "Breakfast Option 4", category: "Breakfast", description: "Scrambled egg with bacon, potatoes, cooked vegetables, bread, tea/milo/coffee + seasonal fruit tray", price: 90.00, image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400" },
    { name: "Breakfast Option 5", category: "Breakfast", description: "2 pancakes with jam, fruit cut, juice + hot drink", price: 60.00, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400" },

    // Cocktails
    { name: "Quickie (House Special)", category: "Cocktails", description: "Junction Lounge house special cocktail", price: 80.00, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" },
    { name: "Long Island Iced Tea", category: "Cocktails", description: "Classic Long Island cocktail", price: 60.00, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" },
    { name: "Mohito", category: "Cocktails", description: "Fresh mint and lime mojito", price: 50.00, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" },
    { name: "Margarita", category: "Cocktails", description: "Tequila, lime juice, Cointreau/Grand Marnier, lime slice, salt", price: 90.00, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" },
    { name: "Pina Colada", category: "Cocktails", description: "Pineapple juice, Malibu, coconut cream, ice", price: 90.00, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" },

    // Smoothies & Shakes
    { name: "Orange Juice", category: "Smoothies & Shakes", description: "Freshly squeezed orange juice", price: 30.00, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400" },
    { name: "Water Melon Juice", category: "Smoothies & Shakes", description: "Fresh watermelon juice", price: 30.00, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400" },
    { name: "Mango Smoothie", category: "Smoothies & Shakes", description: "Creamy fresh mango smoothie", price: 30.00, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400" },
    { name: "Fruit Cocktail Juice", category: "Smoothies & Shakes", description: "Mixed fruit cocktail juice", price: 30.00, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400" },
    { name: "Mango Shake", category: "Smoothies & Shakes", description: "Thick mango milkshake", price: 30.00, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400" },
    { name: "Pineapple Shake", category: "Smoothies & Shakes", description: "Refreshing pineapple shake", price: 30.00, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400" },

    // Shisha
    { name: "Shisha", category: "Shisha", description: "Classic shisha experience", price: 80.00, image: "https://images.unsplash.com/photo-1567335406970-f56e52a71bce?w=400" },
    { name: "Apple Mint Shisha", category: "Shisha", description: "Apple mint flavoured shisha", price: 80.00, image: "https://images.unsplash.com/photo-1567335406970-f56e52a71bce?w=400" },
    { name: "Lemon Mint Shisha", category: "Shisha", description: "Lemon mint flavoured shisha", price: 80.00, image: "https://images.unsplash.com/photo-1567335406970-f56e52a71bce?w=400" },
    { name: "Grape Shisha", category: "Shisha", description: "Grape flavoured shisha", price: 80.00, image: "https://images.unsplash.com/photo-1567335406970-f56e52a71bce?w=400" },
];

// Get unique categories
const categories = ['all', ...new Set(menuData.map(item => item.category))];

// Build category buttons dynamically
function buildCategories() {
    const container = document.querySelector('.menu-categories');
    container.innerHTML = categories.map(cat => `
        <button class="category-btn ${cat === 'all' ? 'active' : ''}" data-category="${cat}">
            ${cat === 'all' ? 'All' : cat}
        </button>
    `).join('');

    // Re-attach click events
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.category-btn.active').classList.remove('active');
            btn.classList.add('active');
            const category = btn.dataset.category;
            displayMenu(category === 'all' ? menuData : menuData.filter(i => i.category === category));
        });
    });
}

// Display menu
function displayMenu(menu) {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = menu.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400'">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-price">GH₵${item.price.toFixed(2)}</div>
            </div>
        </div>
    `).join('');
}

// Order form
document.getElementById('order-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    alert('Thank you for your order! We will call you to confirm shortly.\nPhone: +233 53 154 3058');
    e.target.reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    buildCategories();
    displayMenu(menuData);
});
