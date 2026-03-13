const express = require('express');
const Menu = require('../models/Menu');
const router = express.Router();

// Sample menu data
const sampleMenu = [
  {
    name: "Pho Bo",
    category: "Pho",
    description: "Traditional beef noodle soup with rare steak, brisket, and tendon",
    price: 14.99,
    image: "/images/pho-bo.jpg",
    available: true
  },
  {
    name: "Pho Ga",
    category: "Pho",
    description: "Chicken pho with free-range chicken and fresh herbs",
    price: 13.99,
    image: "/images/pho-ga.jpg",
    available: true
  },
  {
    name: "Bun Bo Hue",
    category: "Noodle Soups",
    description: "Spicy beef noodle soup from Hue with lemongrass and chili oil",
    price: 15.99,
    image: "/images/bun-bo-hue.jpg",
    available: true
  }
];

// Seed menu
router.get('/seed', async (req, res) => {
  await Menu.deleteMany({});
  await Menu.insertMany(sampleMenu);
  res.json({ message: 'Menu seeded' });
});

router.get('/', async (req, res) => {
  const menu = await Menu.find({ available: true });
  res.json(menu);
});

module.exports = router;

