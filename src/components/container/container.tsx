import React, { useState } from "react";
import * as styles from "./container.module.scss";
import CircleWithDots from "../circle-with-dots/circle-with-dots";
import Pagination from "../pagination/pagination";

const Container: React.FC = () => {
  const numDots = 6;
  const [activeDot, setActiveDot] = useState(1);

  const handlePrev = () => {
    if (activeDot > 1) setActiveDot((prev) => prev - 1);
  };

  const handleNext = () => {
    if (activeDot < numDots) setActiveDot((prev) => prev + 1);
  };

  const handleDotClick = (index: number) => {
    setActiveDot(index);
    console.log(`Clicked on dot ${index}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.crosshair}>
        <div className={styles["vertical-line"]}></div>
        <div className={styles["horizontal-line"]}></div>
      </div>
      <CircleWithDots numDots={numDots} onDotClick={handleDotClick} />
      <div className={styles["gradient-line"]}></div>
      <div className={styles.text}>
        <h1>Исторические даты</h1>
      </div>
      <Pagination
        activeDot={activeDot}
        numDots={numDots}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default Container;
