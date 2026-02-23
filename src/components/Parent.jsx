import React, { useEffect, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  const[value,setValue] = useState(0);
  const increment = () => {
    setCount(count + 1);
    if(count%10==0)
        setValue(count);
  };

  useEffect(() => {
    console.log("Parent Component");
  });
  return (
    <div>
      <h3>{count}</h3>
      <button type="button" class="btn btn-primary m-3" onClick={increment}>
        Increment
      </button>

      <Child data={value} />
    </div>
  );
}

export default Parent;
