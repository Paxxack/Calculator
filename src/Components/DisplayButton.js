import React from "react";

export default function DisplayButton({ each, setUserInput, userInput }) {
  const { id, classes, value } = each;
  let stringNames = "";

  for (let i = 0; i < classes.length; i++) {
    if (stringNames === "") {
      stringNames = classes[i];
    }
    stringNames += ` ${classes[i]}`;
  }

  function handleClick() {
    if (
      value === "0" ||
      "1" ||
      "2" ||
      "3" ||
      "4" ||
      "5" ||
      "6" ||
      "7" ||
      "8" ||
      "9"
    ) {
      numberClicked();
    } else if (value === "/" || "*" || "-" || "+") {
      operatorClicked();
    }
  }

  //NEED TO DO THE CUSTOM HOOK FOR DISPLAYBUTTON LOGIC BECAUSE IT BECOMING A REAL MESS RIGHT NOW

  function operatorClicked() {}

  function numberClicked() {
    if (userInput === "0") {
      setUserInput(value);
    } else {
      setUserInput((prevValue) => (prevValue += value));
    }
  }

  function checkName() {
    if (id === "img") {
      return (
        <div className={`${value}-btn`} onClick={handleClick} id={value}>
          <img
            id={value}
            className={`${value}-icon`}
            src={`./${value}-btn.svg`}
            alt={`${value}`}
          ></img>
        </div>
      );
    }
    return (
      <button id={id} className={stringNames} onClick={handleClick}>
        {id}
      </button>
    );
  }

  return checkName();
}
