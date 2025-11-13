File: src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>React Router Example</h2>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
File: src/Home.js
import React from "react";
export default function Home(){ return <h3>Welcome to the Home Page!</h3>; }
File: src/About.js
import React from "react";
export default function About(){ return <h3>This is the About Page.</h3>; }
File: src/Contact.js
import React from "react";
export default function Contact(){ return <h3>Contact us at contact@example.com</h3>; }
How to Run:
npx create-react-app router-demo
cd router-demo
npm install react-router-dom
npm start
Expected Output:
Clicking links swaps content without page reload.
 
