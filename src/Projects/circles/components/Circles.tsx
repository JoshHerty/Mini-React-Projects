import { useState } from "react";
import { Link } from "react-router-dom";
import Circle from "../models/Circle";
import "./Circles.css";

const Circles = () => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const [redoCircles, setRedoCircles] = useState<Circle[]>([]);
  const [sizeInput, setSizeInput] = useState("100");
  const [colorInput, setColorInput] = useState("red");

  const addCircle = (a: { clientX: any; clientY: any }) => {
    let posx = a.clientX;
    let posy = a.clientY;
    const circle = {
      top: `${posy}`,
      left: `${posx}`,
      size: `${sizeInput}`,
      color: `${colorInput}`,
    };
    setCircles((prev) => [...prev, circle]);
  };

  const undo = () => {
    setRedoCircles((prev) => [...prev, circles[circles.length - 1]]);
    console.log(redoCircles);

    setCircles((prev) => [
      ...prev.slice(0, circles.length - 1),
      ...prev.slice(circles.length),
    ]);
  };

  const redo = () => {
    setCircles((prev) => [...prev, redoCircles[redoCircles.length - 1]]);
    setRedoCircles((prev) => [
      ...prev.slice(0, redoCircles.length - 1),
      ...prev.slice(redoCircles.length),
    ]);
  };
  return (
    <div className="Circles">
      <header>
        <nav>
          <Link to="/home">
            <button>Home</button>
          </Link>
        </nav>
        <div>
          <button onClick={redo} disabled={redoCircles.length === 0 && true}>
            redo
          </button>
          <button onClick={undo} disabled={circles.length === 0 && true}>
            undo
          </button>
        </div>
        <form>
          <label htmlFor="size">size</label>
          <input
            type="number"
            name="size"
            id="size"
            onChange={(e) => setSizeInput(e.target.value)}
          />
          <label htmlFor="color">color</label>
          <input
            type="text"
            name="color"
            id="color"
            onChange={(e) => setColorInput(e.target.value)}
          />
        </form>
      </header>

      <div onClick={addCircle} className="circle-container">
        {circles.map((circle, index) => (
          <div
            style={{
              top: `${+circle.top - +circle.size / 2}px`,
              left: `${+circle.left - +circle.size / 2}px`,
              height: `${circle.size}px`,
              width: `${circle.size}px`,
              backgroundColor: `${circle.color}`,
            }}
            key={`${circle.top}${circle.left}${index}${Math.ceil(
              Math.random() * 100000
            )}`}
            className="circle"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Circles;
