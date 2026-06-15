"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onclick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
