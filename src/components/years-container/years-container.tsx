import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

import * as styles from "./years-container.module.scss";

interface YearsContainerProps {
  firstYear: number;
  lastYear: number;
}

const YearsContainer: React.FC<YearsContainerProps> = ({
  firstYear,
  lastYear,
}) => {
  const [previousFirstYear, setPreviousFirstYear] = useState(firstYear);
  const [previousLastYear, setPreviousLastYear] = useState(lastYear);

  useEffect(() => {
    gsap.fromTo(
      "#first-year",
      { innerText: previousFirstYear },
      {
        innerText: firstYear,
        duration: 2,
        ease: "power2.inOut",
        snap: { innerText: 1 },
        onComplete: () => {
          setPreviousFirstYear(firstYear);
        },
      }
    );

    gsap.fromTo(
      "#last-year",
      { innerText: previousLastYear },
      {
        innerText: lastYear,
        duration: 2,
        ease: "power2.inOut",
        snap: { innerText: 1 },
        onComplete: () => {
          setPreviousLastYear(lastYear);
        },
      }
    );
  }, [firstYear, lastYear]);

  return (
    <div className={styles["years-container"]}>
      <span id="first-year" className={styles["first-year"]}>
        {firstYear}
      </span>
      <span id="last-year" className={styles["last-year"]}>
        {lastYear}
      </span>
    </div>
  );
};

export default YearsContainer;
