File: views/index.ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>home page </title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    li { color: navy; }
  </style>
</head>
<body>
  
  <h1><%= message %> </h1>

  <p>Here is a list of items:</p>
  <ul>
    <% items.forEach(function(item){ %>
      <li><%= item %></li>
    <% }); %>
  </ul>

</body>
</html>
File: app.js
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
 
  const data = {
    title: 'Home Page',
    message: 'Hello from EJS!',
    items: ['Apple', 'Banana', 'Cherry']
  };

  res.render('index', data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
How to Run:
npm init -y
npm install express ejs
# put index.ejs inside ./views
node app.js
GET http://localhost:3000/
Expected Output:
Renders:
Hello from EJS!
Here is a list of items:
- Apple
- Banana
- Cherry
 
