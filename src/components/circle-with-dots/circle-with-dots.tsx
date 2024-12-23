import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { MockData } from "@/types/event-types";

import * as styles from "./circle-with-dots.module.scss";

interface CircleWithDotsProps {
  numDots: number;
  onDotClick: (index: number) => void;
  activeDot: number;
  mockData: MockData;
}

const CircleWithDots: React.FC<CircleWithDotsProps> = ({
  numDots,
  onDotClick,
  activeDot,
  mockData,
}) => {
  const radius = 265;
  const circleRef = useRef<HTMLDivElement | null>(null);
  const [showCategory, setShowCategory] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getDotPosition = (index: number) => {
    const angle = (index / numDots) * 2 * Math.PI;
    const x = radius + radius * Math.cos(angle);
    const y = radius + radius * Math.sin(angle);
    return { x, y, angle };
  };

  useEffect(() => {
    if (circleRef.current) {
      const angle = (activeDot / numDots) * 360;
      gsap.to(circleRef.current, {
        rotation: -angle,
        duration: 1.5,
        transformOrigin: "center center",
        onComplete: () => {
          setShowCategory(true);
        },
      });
    }
  }, [activeDot, numDots]);

  const getCategoryByIndex = (index: number) => {
    const categoryIndex = Math.floor(index / (numDots / mockData.length));
    return mockData[categoryIndex].category;
  };

  const handleDotClick = (index: number) => {
    setShowCategory(false);
    onDotClick(index);
  };

  return (
    <div className={styles["circle-container"]}>
      <div className={styles.circle} ref={circleRef}>
        {Array.from({ length: numDots }).map((_, index) => {
          const { x, y, angle } = getDotPosition(index);
          const isActive = activeDot === index + 1;
          const isHovered = hoveredIndex === index;
          const category = getCategoryByIndex(index);

          return (
            <div
              key={index}
              className={`${styles.dot} ${
                isActive || isHovered ? styles.activeDot : ""
              }`}
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: `translate(-50%, -50%) rotate(${angle}rad)`,
              }}
              onClick={() => handleDotClick(index + 1)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={styles["dot-content"]}
                style={{
                  transform: `rotate(60deg)`,
                  opacity: isActive || isHovered ? 1 : 0,
                }}
              >
                <span className={styles["dot-index"]}>{index + 1}</span>
                {isActive && showCategory && (
                  <span
                    className={styles["dot-category"]}
                    style={{
                      position: "absolute",
                      left: 40,
                    }}
                  >
                    {category}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircleWithDots;
