import buttonData from "./buttonData";
import DisplayButton from "./DisplayButton";
import React from "react";

function App() {
  console.log(buttonData);

  const buttonsDisplay = buttonData.map((each, id) => {
    return <DisplayButton each={each} key={id} />;
  });
  // function handleClick(e) {
  //   console.log(e.target.name);
  // }
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

        <div className="container-btn">
          {buttonsDisplay}
          {/* <button name="" className="btn gray black-font">
            C
          </button>
          <button name="" className="btn gray black-font">
            CE
          </button>
          <button
            name="img"
            className="btn gray black-font"
            onClick={handleClick}
          >
            <img
              className="delete-icon"
              src="./delete-left-solid.svg"
              alt="delete"
            ></img>
          </button>
          <button name="" className="btn orange">
            /
          </button>

          <button name="7" className="btn" onClick={handleClick}>
            7
          </button>
          <button name="" className="btn">
            8
          </button>
          <button name="" className="btn">
            9
          </button>
          <button name="" className="btn orange">
            X
          </button>

          <button name="" className="btn">
            4
          </button>
          <button name="" className="btn">
            5
          </button>
          <button name="" className="btn">
            6
          </button>
          <button name="" className="btn orange">
            -
          </button>

          <button name="" className="btn">
            1
          </button>
          <button name="" className="btn">
            2
          </button>
          <button name="" className="btn">
            3
          </button>
          <button name="" className="btn orange">
            +
          </button>

          <button name="" className="large-btn">
            0
          </button>
          <button name="" className="btn">
            .
          </button>
          <button name="" className="btn orange">
            =
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
