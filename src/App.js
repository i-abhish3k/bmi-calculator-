import "./App.css";
import "./index.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // logic for bim
  const calculateBMI = (e) => {
    e.preventDefault();
    // input validation
    if (weight === 0 || height === 0) {
      alert("Please enter a vailde input");
    }
    // bussiness logic
    else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      // message logic
      if (bmi < 25) {
        setMessage("You are UnderWeight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("you have normal weight");
      } else {
        setMessage("you are overweigth");
      }
    }
  };

  const reload = () => window.location.reload();

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calculateBMI}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter Weight value in lbs"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (in)</label>
            <input
              type="text"
              placeholder="Enter Height in cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>

          <div className="center">
            <h3>
              Your BMI is <strong>{bmi}</strong>
            </h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
