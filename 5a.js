File: app.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Dummy user data
const user = {
  username: 'shamith',
  password: '12345'
};

// Middleware to check authentication
function authenticate(req, res, next) {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    next();
  } else {
    res.status(401).send('Authentication failed');
  }
}

// Login route
app.post('/login', authenticate, (req, res) => {
  res.send(`Welcome ${req.body.username}, you are authenticated!`);
});

// Protected route
app.get('/dashboard', authenticate, (req, res) => {
  res.send('This is the dashboard. Only authenticated users can see this.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
How to Run:
npm init -y
npm install express
node app.js

# Test with Postman:
POST http://localhost:3000/login
Body (JSON):
{ "username":"shamith", "password":"12345" }
Expected Output:
POST /login (correct)-> Welcome shamith, you are authenticated!
POST /login (wrong)  -> 401 Authentication failed
Terminal: Server running at http://localhost:3000
