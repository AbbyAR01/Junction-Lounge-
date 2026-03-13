import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Mock API (No database needed for demo)
app.get('/api/menu', (req, res) => {
  const menu = [
  {
    _id: "1", name: "Signature Old Fashioned", category: "Cocktails",
    description: "Bourbon, bitters, sugar, orange twist - our classic", price: 16.99,
    image: "https://images.unsplash.com/photo-1575305265484-5588c3894a58?w=400"
  },
  {
    _id: "2", name: "Truffle Fries", category: "Appetizers", 
    description: "Hand-cut fries with truffle oil and parmesan", price: 12.99,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400"
  },
  {
    _id: "3", name: "Filet Mignon", category: "Mains",
    description: "8oz prime filet, herb butter, seasonal vegetables", price: 48.99,
    image: "https://images.unsplash.com/photo-1512568400610-3f3f73bed6a6?w=400"
  },
  {
    _id: "4", name: "Chocolate Lava Cake", category: "Desserts",
    description: "Warm chocolate cake with molten center, vanilla ice cream", price: 14.99,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400"
  }
];
      _id: "4",
      name: "Com Tam",
      category: "Rice Dishes",
      description: "Broken rice with grilled pork chop, egg, and pickled vegetables",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1626072164341-6a928b6c11cd?w=400",
      available: true
    }
  ];
  res.json(menu);
});

app.post('/api/orders', (req, res) => {
  // Simulate order submission
  setTimeout(() => {
    res.json({ success: true, message: 'Order received! We\'ll call you to confirm.' });
  }, 1000);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Junctin Lounge running on port ${port}`);
});

export default app;
