File: src/App.js
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>React Screen Update Example</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default App;
How to Run:
npx create-react-app update-demo
cd update-demo
npm start
Expected Output:
Count increments on each click.
 
