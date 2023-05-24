import buttonData from "./buttonData";
import DisplayButton from "./Components/DisplayButton";
import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");

  const buttonsDisplay = buttonData.map((each, id) => {
    return <DisplayButton each={each} key={id} setUserInput={setUserInput} />;
  });

  console.log(buttonsDisplay);
  return (
    <div className="App" id="grad">
      <div className="phone-container">
        <div className="field user-history">32345</div>
        <input
          readOnly
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
