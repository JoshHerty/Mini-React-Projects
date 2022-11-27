import { useState } from "react";
import { Link } from "react-router-dom";
import "./Typing.css";

const Typing = () => {
  // UseState for textbox input
  const [textboxInput, setTextboxInput] = useState("");

  // text being copied. Will make dynamic with changing text in the future
  const lines =
    "I met a traveler from an antique land, Who said: 'Two vast and trunkless legs of stone', Stand in the desert. Near them on the sand, Half sunk, a shattered visage lies, whose frown, And wrinkled lip and sneer of cold command, Tell that its sculptor well those passions read, Which yet survive, stamped on these lifeless things, The hand that mocked them and the heart that fed. And on the pedestal these words appear: 'My name is Ozymandias, King of Kings: Look on my works, ye mighty, and despair! Nothing beside remains. Round the decay Of that colossal wreck, boundless and bare, 'The lone and level sands stretch far away.";

  // turns prompt text into an array
  const linesToArray = lines.split(" ");
  //   console.log(linesToArray);

  // checks each word in the array to equal the given prompt and adds one for each match
  const checkCongruencey = (): number => {
    // turns the input into an array of strings
    const textboxInputToArray = textboxInput.split(" ");
    // console.log(textboxInputToArray);

    // tally for all matches
    let sum = 0;
    // loops through all strings in the inputTextboxToArray array
    for (let x = 0; x <= textboxInputToArray.length; x++) {
      // checks for matches at each index of both arrays
      if (textboxInputToArray[x] === linesToArray[x]) {
        // sum + 1 for every match
        sum++;
      }
      // console.log(sum);
      //   console.log(textboxInput);
    }
    return sum;
  };

  // restricts keys from being pressed
  const handleKeyDown = (e: any) => {
    // prevents enter key from being pressed
    if (e.code === "Enter") {
      e.preventDefault();
    }
    // prevents double spacing
    if (textboxInput[textboxInput.length - 1] === " ") {
      if (e.code === "Space") {
        e.preventDefault();
      }
    }
  };

  return (
    <div className="Typing">
      <header>
        <nav>
          <Link to="/home">
            <button>Home</button>
          </Link>
        </nav>
      </header>
      <p>{lines}</p>
      <textarea
        // calls handleKeyDown function
        onKeyDown={handleKeyDown}
        value={textboxInput}
        // sets textboxInput value to content inside textarea element
        onChange={(e) => {
          setTextboxInput(e.target.value);
        }}
        // disables textbox if all text is written
        disabled={textboxInput === lines && true}
      />
      <p>{checkCongruencey()}</p>
    </div>
  );
};

export default Typing;
