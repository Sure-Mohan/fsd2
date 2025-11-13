File: src/App.js
import React from "react";
import Welcome from "./Welcome";
import Message from "./Message";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>React Components Example</h2>
      <Welcome />
      <Message />
    </div>
  );
}
export default App;
File: src/Welcome.js
import React from "react";
function Welcome(){ return <h3>Hello! I am a Function Component.</h3>; }
export default Welcome;
File: src/Message.js
import React, { Component } from "react";
class Message extends Component { render(){ return <p>This message is from a Class Component.</p>; } }
export default Message;
How to Run:
npx create-react-app components-demo
cd components-demo
npm start
Expected Output:
Shows both function and class components.
 
