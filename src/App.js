import "./App.css";
import calculator from "./img/Vectorcalculator.png";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

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
          <p>0</p>
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="reset">
          <button>reset</button>
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
