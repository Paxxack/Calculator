import buttonData from "./buttonData";
import DisplayButton from "./Components/DisplayButton";
import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("0");
  const [firstEntrie, setFirstEntry] = useState();
  const [sign, setSign] = useState();

  console.log(userInput);
  const buttonsDisplay = buttonData.map((each, id) => {
    return (
      <DisplayButton
        each={each}
        key={id}
        setUserInput={setUserInput}
        userInput={userInput}
      />
    );
  });

  return (
    <div className="App" id="grad">
      <div className="phone-container">
        <div className="field user-history">32345</div>
        <input
          disabled
          value={userInput}
          className="field user-entries"
        ></input>
        <img
          className="iphone-img"
          src="./calculator.png"
          alt="iphone calculator"
        ></img>

        <div className="container-btn">{buttonsDisplay}</div>
      </div>
    </div>
  );
}

export default App;

// Determine what kind of value is entered
// num -- > remove 0 add num
// sign --> save input value, clear input, display first entry in upper section, assign and display appro sign
// func --> determine
