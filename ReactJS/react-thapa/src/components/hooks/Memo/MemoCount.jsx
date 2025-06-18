import { useRef, memo } from "react";

//! Here we used react memo with component to prevent unwanted render due to parent component
export const Counts = memo(({ bioData }) => {
  const renderCount = useRef(0);

  return (
    <div>
      <p>
        Nothing changed here but Ive now rendered:
        <span className="text-red-600">{renderCount.current++} time(s)</span>
        <p>My name is {bioData.name}</p>
      </p>
    </div>
  );
});

