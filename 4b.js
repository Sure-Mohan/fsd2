File: src/App.js
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState("");

  const handleClick = () => alert("Button Clicked!");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => { e.preventDefault(); alert(`You entered: ${text}`); };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>React Event Handling Example</h2>
      <button onClick={handleClick}>Click Me</button>
      <hr />
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} placeholder="Type..." />
        <button type="submit">Submit</button>
      </form>
      <p>You typed: {text}</p>
    </div>
  );
}

export default App;
How to Run:
npx create-react-app event-demo
cd event-demo
npm start
Expected Output:
Button alert on click; input mirrors text; submit alerts the entered text.
 
