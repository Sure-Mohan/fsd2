File: src/App.js
import React, { useState } from 'react';
import Greeting from './Greeting';

function App() {
  const [name, setName] = useState("Sathwvik");

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Props and State Example</h1>
      <Greeting user={name} />
      <button onClick={() => setName("Lavanya")}>Change Name</button>
    </div>
  );
}

export default App;
File: src/Greeting.js
import React from 'react';

function Greeting(props) {
  return <h2>Hello, {props.user}!</h2>;
}

export default Greeting;
How to Run:
npx create-react-app props-state-demo
cd props-state-demo
npm start
Expected Output:
Initial shows Hello, Sathwvik! then after click shows Hello, Lavanya!
 
