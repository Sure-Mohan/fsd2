File: app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve a simple HTML form
app.get('/', (req, res) => {
  res.send(`
    <h2>Simple Form Example</h2>
    <form action="/submit" method="POST">
      Name: <input type="text" name="name" /><br><br>
      Email: <input type="email" name="email" /><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`<h3>Form Submitted Successfully!</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
How to Run:
npm init -y
npm install express body-parser
node app.js
# Open http://localhost:3000/ and submit the form
Expected Output:
Displays submitted Name and Email on the response page.
Terminal: Server running at http://localhost:3000
 
