import React, { useState, useMemo } from "react";

function UseMemoComponent() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // useMemo so if component re-renders, but 'number' doesn't change, we don't run the slowFunction() again.
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // useMemo so if component re-renders, we don't create new 'themeStyles' in memory(with different refference) again.
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  });

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log("Calling Slow Function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default UseMemoComponent;
