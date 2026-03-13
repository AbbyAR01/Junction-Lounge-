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
      _id: "1",
      name: "Pho Bo",
      category: "Pho",
      description: "Traditional beef noodle soup with rare steak, brisket, and tendon",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db14?w=400",
      available: true
    },
    {
      _id: "2",
      name: "Pho Ga",
      category: "Pho",
      description: "Chicken pho with free-range chicken and fresh herbs",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400",
      available: true
    },
    {
      _id: "3",
      name: "Bun Bo Hue",
      category: "Noodle Soups",
      description: "Spicy beef noodle soup from Hue with lemongrass and chili oil",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
      available: true
    },
    {
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
