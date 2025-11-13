File: app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware function
const logger = (req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next(); // Pass control to the next middleware/route
};

// Use middleware for all routes
app.use(logger);

// Route 1
app.get('/', (req, res) => {
  res.send('Hello! This is the homepage.');
});

// Route 2
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Route 3
app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
How to Run:
npm init -y
npm install express
node app.js

GET http://localhost:3000/
GET http://localhost:3000/about
GET http://localhost:3000/contact
Expected Output:
Browser:
'/'       -> Hello! This is the homepage.
'/about'  -> This is the about page.
'/contact'-> Contact us at contact@example.com

Terminal:
GET request for '/'
GET request for '/about'
GET request for '/contact'
Server running at http://localhost:3000
