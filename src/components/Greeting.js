import { useState } from "react";

export default function Greeting() {
  const [text, setText] = useState(false);

  function handleChange() {
    setText(true);
  }
  return (
    <div>
      <h2>Hello World!</h2>
      {text ? <p>Changed!</p> : <p>It's good to see you!</p>}
      <button onClick={handleChange}> Change Text!</button>
    </div>
  );
}
