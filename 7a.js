File: src/App.js
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Conditional Rendering Example</h2>
      {isLoggedIn ? <h3>Welcome, Sathwvik!</h3> : <h3>Please log in to continue.</h3>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;
How to Run:
npx create-react-app conditional-demo
cd conditional-demo
npm start
Expected Output:
Shows login prompt then welcome text after toggle.
 
