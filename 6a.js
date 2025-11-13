File: app.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // to read JSON data

// Sample data (acts like a small database)
let users = [
  { id: 1, name: 'Sathwvik' },
  { id: 2, name: 'Lavanya' }
];

// ✅ GET - Retrieve all users
app.get('/users', (req, res) => {
  res.json(users);
});

// ✅ POST - Accept data and add a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.send('User added successfully!');
});

// ✅ DELETE - Delete a user by id
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(user => user.id !== id);
  res.send(`User with ID ${id} deleted.`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
How to Run:
npm init -y
npm install express
node app.js

GET    http://localhost:3000/users
POST   http://localhost:3000/users   Body: { "id":3, "name":"Ravi" }
DELETE http://localhost:3000/users/2
Expected Output:
GET -> [ { id:1, name:'Sathwvik' }, { id:2, name:'Lavanya' } ]
POST -> User added successfully!
DELETE -> User with ID 2 deleted.
Terminal: Server running at http://localhost:3000
 
