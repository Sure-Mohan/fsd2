File: app.js
// Import express
const express = require('express');
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Route with a parameter (e.g., /user/John)
app.get('/user/:name', (req, res) => {
  const userName = req.params.name;
  res.send(`Hello, ${userName}!`);
});

// Route with query parameters (e.g., /search?item=phone&price=10000)
app.get('/search', (req, res) => {
  const { item, price } = req.query;
  res.send(`You searched for ${item} priced at ₹${price}`);
});

// URL building example
app.get('/profile/:username', (req, res) => {
  const profileUrl = `/user/${req.params.username}`;
  res.send(`Profile URL is: ${profileUrl}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
How to Run:
npm init -y
npm install express
node app.js

# Test:
GET http://localhost:3000/
GET http://localhost:3000/user/John
GET http://localhost:3000/search?item=phone&price=10000
GET http://localhost:3000/profile/sathwvik
Expected Output:
/ -> Welcome to the Home Page!
/user/John -> Hello, John!
/search?item=phone&price=10000 -> You searched for phone priced at ₹10000
/profile/sathwvik -> Profile URL is: /user/sathwvik

Terminal: Server running on http://localhost:3000
 
