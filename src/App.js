import "./App.css";
import calculator from "./img/Vectorcalculator.png";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  // const [isAtHome, setIsAtHome] = useState(false);
  // const handleClick = () => {
  //   setIsAtHome(!isAtHome);

  return (
    <div className="container">
      <header>
        <img src={calculator} alt="Calculator" />
        <h1>React Counter</h1>
      </header>

      <main>
        <div className="calcul">
          {counter}
          <button
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            -
          </button>

          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="reset">
          <button
            onClick={() => {
              setCounter(counter(0));
            }}
          >
            reset
          </button>
        </div>
      </main>
      <footer>
        Made with<span> React </span> at
        <span> Le Reacteur</span> by
        <span> Vincent</span>
      </footer>
    </div>
  );
}

export default App;
