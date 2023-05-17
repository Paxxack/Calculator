import buttonData from "./buttonData";
import DisplayButton from "./DisplayButton";
import React from "react";

function App() {
  console.log(buttonData);

  const buttonsDisplay = buttonData.map((each, id) => {
    return <DisplayButton each={each} key={id} />;
  });

  console.log(buttonsDisplay);
  return (
    <div className="App" id="grad">
      <div className="phone-container">
        <div className="field user-history">32345</div>
        <div className="field user-entries">543</div>
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
