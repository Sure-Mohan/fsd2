public/index.html (The HTML Shell)
HTML
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>React App</title>
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
</body>
</html>
src/App.js (The Component to be Rendered)
JavaScript
import React from 'react';
// This is a simple React component that returns JSX (which looks like HTML)
function App() {
return (
<div>
<h1>Hello, React!</h1>
<p>This HTML is being rendered by a React component.</p>
</div>
);
}
export default App;
src/index.js (The "Glue")
JavaScript
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new client for React 18
import App from './App'; // Import our component
// 1. Get the root element from index.html
const rootElement = document.getElementById('root');
// 2. Create a "root" for React to manage
const root = ReactDOM.createRoot(rootElement);
// 3. Tell React to render our <App /> component inside the root
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);
🚀 Execution Steps
1. Create a new React app: npx create-react-app my-app.
2. cd my-app.
3. The files above are already created for you by create-react-app. You can
inspect them to see how they work.
4. Start the app: npm start.
📊 Sample Output
The browser will show:
Hello, React!
This HTML is being rendered by a React component.
