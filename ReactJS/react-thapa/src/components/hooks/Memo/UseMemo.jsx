import { useMemo, useState } from "react";


const ExpensiveComponent = () => {
  //   Expensive calculation function
  const sum = () => {
    console.log("Calculating sum...");
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

  //!here useMemo is optimizing expensive calculation which give same result by caching
  const total = useMemo(() => sum(), []);

  //   const total = sum();

  return <p> sum: {total} </p>;
};

export const MemoParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ExpensiveComponent />
      <button
        onClick={() => setCount(count + 1)}
      >
        Re-render Parent
      </button>
      <p>Parent re-renders: {count}</p>
    </div>
  );
};

