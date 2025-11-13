File: src/App.js
import React from 'react';

function App() {
  const name = "Sathwvik";
  const branch = "CSE";

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>JSX Example</h1>
      <p>Hello, <strong>{name}</strong>!</p>
      <p>You are studying in the <em>{branch}</em> branch.</p>
      <p>JSX lets us write HTML-like code inside JavaScript!</p>
    </div>
  );
}

export default App;
How to Run:
npx create-react-app jsx-demo
cd jsx-demo
npm start
Expected Output:
Displays headings and lines with name and branch.
 
