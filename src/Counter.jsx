import { useEffect, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => console.log(`This is counter: ${counter}`), [counter]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "2rem"
      }}
    >
      <button
        style={{ marginRight: "1rem" }}
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <span
        style={{
          fontWeight: "bold",
          marginRight: "1rem"
        }}
      >
        {counter}
      </span>
      <button
        onClick={() => {
          setCounter((c) => c + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
