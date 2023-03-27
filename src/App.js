import "./styles.css";
import { useState } from "react";
let watchHandler = undefined;
export default function App() {
  const [watch, setWatch] = useState(0);
  const [started, setStarted] = useState(false);
  const startWatch = () => {
    watchHandler = setInterval(() => {
      setWatch((prev) => prev + 1);
    }, 1000);
    setStarted(true);
  };
  const stopWatch = () => {
    clearInterval(watchHandler);
    setStarted(false);
  };

  const resetWatch = () => {
    clearInterval(watchHandler);
    setStarted(false);
    setWatch(0);
  };
  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <h2>{watch}</h2>
      <button className="startBtn" disabled={started} onClick={startWatch}>
        Start
      </button>
      <button className="stopBtn" onClick={stopWatch}>
        Stop
      </button>
      <button className="resetBtn" onClick={resetWatch}>
        Reset
      </button>
    </div>
  );
}
