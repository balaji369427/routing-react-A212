import React from "react";
import { useReducer } from "react";

function Reducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return state + 1;
      case "DEC":
        return state - 1;
      case "RES":
        return 0;
        case "DBL":
        return state*action.payload;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>The count is {count}</h1>
      <button
        className="btn btn-primary m-3"
        onClick={() => dispatch({ type: "INC" })}
      >
        Increment
      </button>
      <button
        className="btn btn-primary m-3"
        onClick={() => dispatch({ type: "DEC" })}
      >
        Decrement
      </button>
      <button
        className="btn btn-primary m-3"
        onClick={() => dispatch({ type: "RES" })}
      >
        Reset
      </button>
      <button
        className="btn btn-primary m-3"
        onClick={() => dispatch({ type: "DBL",payload: 2 })}
      >
        Double
      </button>

    </div>
  );
}

export default Reducer;
