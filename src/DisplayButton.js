import React from "react";

export default function DisplayButton({ each }) {
  const { name, classes, value, img } = each;
  let stringNames = "";
  for (let i = 0; i < classes.length; i++) {
    if (stringNames === "") {
      stringNames = classes[i];
    }
    stringNames += ` ${classes[i]}`;
  }

  function checkName() {
    if (name === "img") {
      return <span dangerouslySetInnerHTML={{ __html: img }} />;
    }
    return name;
  }

  function handleClick(e) {
    console.log(e.target.name);
  }

  // PROBLEM: THE BUTTON WITH THE IMAGE IS NOT RECOGNIZE AS SUCH AND
  //          YOU CANT CLICK WHERE THE IMAGE ITSELF IS.

  // SOLUTION: MAKE A TERNARY OPERATOR IN THE RETURN THAT SAY IF NAME = img RETURN AN
  //           IMAGE WITH THE APPROPRIATE INFO THE LAY IT OUT NORMALY
  // NOTE: I WILL PROBABLY NEED TO ADJUST THE CSS TO MAKE THE IMAGE LOOK LIKE EXACTLY
  //        LIKE THOSE BUTTON.

  return (
    <button name={name} className={stringNames} onClick={handleClick}>
      {checkName()}
    </button>
  );
}
