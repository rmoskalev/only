import React from "react";
import * as styles from "./circle-with-dots.module.scss";

interface CircleWithDotsProps {
  numDots: number;
  onDotClick: (index: number) => void;
}

const CircleWithDots: React.FC<CircleWithDotsProps> = ({
  numDots,
  onDotClick,
}) => {
  const radius = 265;

  const getDotPosition = (index: number) => {
    const angle = (index / numDots) * 2 * Math.PI;
    const x = radius + radius * Math.cos(angle);
    const y = radius + radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className={styles["circle-container"]}>
      <div className={styles.circle}></div>
      {Array.from({ length: numDots }).map((_, index) => {
        const { x, y } = getDotPosition(index);
        return (
          <div
            key={index}
            className={styles.dot}
            style={{
              left: `${x}px`,
              top: `${y}px`,
            }}
            onClick={() => onDotClick(index + 1)}
          ></div>
        );
      })}
    </div>
  );
};

export default CircleWithDots;
