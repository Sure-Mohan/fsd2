import React, { useState } from 'react';
import './App.css';

function Child({ parentMessage, onUpdateMessage }) {
  const handleUpdate = () => {
    onUpdateMessage("Message changed by the Child!");
  };

  return (
    <div className="child-box">
      <h2>Child Component</h2>
      {/* Display the prop passed from the parent */}
      <p>Message from parent: {parentMessage}</p>
      {/* Button to send data "up" by calling the prop function */}
      <button onClick={handleUpdate}>Change Parent's Message</button>
    </div>
  );
}

function App() {
  const [message, setMessage] = useState("Hello from the Parent!");

  // Function to be passed to the child
  const updateMessageFromChild = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div className="App">
      <h1>Parent Component</h1>
      <p>Message: {message}</p>
      {/* Pass data DOWN (message)
          Pass function DOWN (updateMessageFromChild)
      */}
      <Child
        parentMessage={message}
        onUpdateMessage={updateMessageFromChild}
      />
    </div>
  );
}
Expected output:
Parent Component
Message: Hello from the Parent!

Child Component
Message from parent: Hello from the Parent!
[Change Parent's Message]

After clicking the button:
Parent Component
Message: Message changed by the Child!

Child Component
Message from parent: Message changed by the Child!
[Change Parent's Message]

export default App;
