import React from "react";
import * as styles from "./pagination.module.scss";
import PaginationButton from "./pagination-button";

interface PaginationProps {
  activeDot: number;
  numDots: number;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  activeDot,
  numDots,
  onPrev,
  onNext,
}) => {
  return (
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
  );
};

export default Pagination;
