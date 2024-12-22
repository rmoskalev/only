import React from "react";
import "@styles/styles.scss";

const CircleWithDots: React.FC = () => {
  const numDots = 6;
  const radius = 265;

  const getDotPosition = (index: number) => {
    const angle = (index / numDots) * 2 * Math.PI;
    const x = radius + radius * Math.cos(angle);
    const y = radius + radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="circle-container">
      <div className="circle"></div>
      {Array.from({ length: numDots }).map((_, index) => {
        const { x, y } = getDotPosition(index);
        return (
          <div
            key={index}
            className="dot"
            style={{
              left: `${x}px`,
              top: `${y}px`,
            }}
            onClick={() => console.log(`Clicked on dot ${index + 1}`)}
          ></div>
        );
      })}
    </div>
  );
};

export default CircleWithDots;
