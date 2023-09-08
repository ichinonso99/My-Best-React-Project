import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const displayText = useSelector((store) => store);
  const dispatch = useDispatch();
  const { counter, display } = displayText;
  console.log(displayText);
  return (
    <div>
      {/* <h1> Counter</h1> */}
      <p>{counter}</p>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>

      {/* <h2> Display Text</h2> */}
      {display.map((text) => {
        return (
          <div key={text.id}>
            <h2>{text.name}</h2>
            {/* <p>{text}</p> */}
          </div>
        );
      })}
      {/* <p>{displayText}</p> */}
    </div>
  );
}

export default Counter;
