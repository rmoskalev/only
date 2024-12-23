import React from "react";

import * as styles from "./pagination.module.scss";

interface PaginationButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  direction,
  onClick,
  disabled,
}) => {
  const symbol = direction === "prev" ? "<" : ">";

  return (
    <button
      className={styles["pagination-button"]}
      data-symbol={symbol}
      onClick={onClick}
      disabled={disabled}
    ></button>
  );
};

export default PaginationButton;
