import React from "react";

export default function DisplayButton({ each }) {
  const { id, classes, value, setUserInput } = each;
  let stringNames = "";

  for (let i = 0; i < classes.length; i++) {
    if (stringNames === "") {
      stringNames = classes[i];
    }
    stringNames += ` ${classes[i]}`;
  }

  function handleClick(e) {
    setUserInput(e.target.value);
    console.log(e.target.id);
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
