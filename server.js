
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Preset quotes
const quotes = [
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    text: "Success is not final, failure is not fatal.",
    author: "Winston Churchill"
  },
  {
    text: "Do what you can, with what you have.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Unknown"
  },
  {
    text: "Your only limit is your mind.",
    author: "Unknown"
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  },
  {
    text: "Believe in yourself and all that you are.",
    author: "Christian D. Larson"
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso"
  },
  {
    text: "The best way out is always through.",
    author: "Robert Frost"
  },
  {
    text: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey"
  },
  {
    text: "Push yourself, because no one else will.",
    author: "Unknown"
  },
  {
    text: "Small steps every day lead to big results.",
    author: "Unknown"
  },
  {
    text: "Never give up on what you really want.",
    author: "Unknown"
  },
  {
    text: "Make each day your masterpiece.",
    author: "John Wooden"
  },
  {
    text: "Happiness depends upon ourselves.",
    author: "Aristotle"
  },
  {
    text: "Difficulties in life are intended to make us better.",
    author: "Dan Reeves"
  }
];

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// API: Get a random quote
app.get("/api/quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

// API: Get all quotes
app.get("/api/quotes", (req, res) => {
  res.json(quotes);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
    