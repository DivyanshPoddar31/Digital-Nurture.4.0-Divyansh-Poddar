import React, { useState } from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  // a. Increment logic
  const increment = () => {
    setCount((prev) => prev + 1);
    sayHello(); // multiple function calls
  };

  // b. Static message
  const sayHello = () => {
    console.log("Hello! Counter was increased.");
  };

  // Decrement
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  // Say Welcome with argument
  const sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic Event handler
  const handleClick = (e) => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎯 Event Examples App</h1>

      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br />
      <br />
      <button onClick={() => sayWelcome("Welcome to React Events!")}>
        Say Welcome
      </button>

      <br />
      <br />
      <button onClick={handleClick}>OnPress</button>

      <br />
      <br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
