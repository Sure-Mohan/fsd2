File: src/App.js
import React from 'react';

function App() {
  const students = ["Sathwvik", "Lavanya", "Ravi", "Teja"];
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Rendering List Example</h2>
      <ul>{students.map((name, i) => <li key={i}>{name}</li>)}</ul>
    </div>
  );
}

export default App;
How to Run:
npx create-react-app list-demo
cd list-demo
npm start
Expected Output:
List of names rendered as bullet points.
 
