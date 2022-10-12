import { useState } from "react";

export default function JokesApp(props) {
  const [isShown, setIsShown] = useState(false);

  function toggleShowon() {
    setIsShown(prevShown => !prevShown)
  }

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggleShowon}>{isShown ? "Hide" : "Show"} Punchline</button>
      <hr />
    </div>
  );
}
