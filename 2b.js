File: src/App.js
import React from 'react';
import './App.css';
import './App.scss';

function App() {
  const student = { name: "Sathwvik", branch: "CSE", year: "2nd Year" };
  return (
    <div className="container">
      <h1 className="title">Student Details</h1>
      <div className="card">
        <p><b>Name:</b> {student.name}</p>
        <p><b>Branch:</b> {student.branch}</p>
        <p><b>Year:</b> {student.year}</p>
      </div>
    </div>
  );
}
export default App;
File: src/App.css
.container { text-align: center; margin-top: 40px; }
.title { color: blue; }
File: src/App.scss
.card { background-color:#f5f5f5; border:2px solid #ddd; padding:20px; margin:20px auto; width:250px; border-radius:10px; box-shadow:2px 2px 6px gray;
  p { color:#333; font-size:16px; } }
How to Run:
npx create-react-app style-demo
cd style-demo
npm install sass
npm start
Expected Output:
Shows styled card with student details.
 
