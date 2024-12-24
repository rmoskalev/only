import React from "react";
import PaginationButton from "./pagination-button";

import * as styles from "./pagination.module.scss";

interface PaginationProps {
  activeDot: number;
  numDots: number;
  onPrev: () => void;
  onNext: () => void;
  handleDotClick: (dot: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  activeDot,
  numDots,
  onPrev,
  onNext,
  handleDotClick,
}) => {
  const dots = Array.from({ length: numDots }, (_, index) => index + 1);

  return (
    <div className={styles["pagination-container"]}>
      <div className={styles.pagination}>
        <span className={styles["pagination-index"]}>
          0{activeDot}/0{numDots}
        </span>
        <div className={styles["pagination-buttons"]}>
          <PaginationButton
            direction="prev"
            onClick={onPrev}
            disabled={activeDot === 1}
          />
          <PaginationButton
            direction="next"
            onClick={onNext}
            disabled={activeDot === numDots}
          />
        </div>
      </div>
      <div className={styles["pagination-bullets"]}>
        {dots.map((dot) => (
          <button
            key={dot}
            className={`${styles["pagination-bullet"]} ${
              dot === activeDot ? styles.active : ""
            }`}
            onClick={() => handleDotClick(dot)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
