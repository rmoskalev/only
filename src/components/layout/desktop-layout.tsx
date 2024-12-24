import React from "react";

import { MockData } from "@/types/event-types";
import CircleWithDots from "../circle-with-dots/circle-with-dots";
import Pagination from "../pagination/pagination";
import SliderContainer from "../slider-container/slider-container";
import YearsContainer from "../years-container/years-container";

import * as styles from "./desktop-layout.module.scss";

interface DesktopLayoutProps {
  numDots: number;
  activeDot: number;
  handleDotClick: (index: number) => void;
  handlePrev: () => void;
  handleNext: () => void;
  mockData: MockData;
  firstYear: number;
  lastYear: number;
}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({
  numDots,
  activeDot,
  handleDotClick,
  handlePrev,
  handleNext,
  firstYear,
  lastYear,
  mockData,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.crosshair}>
        <div className={styles["vertical-line"]}></div>
        <div className={styles["horizontal-line"]}></div>
      </div>
      <CircleWithDots
        numDots={numDots}
        onDotClick={handleDotClick}
        activeDot={activeDot}
        mockData={mockData}
      />
      <div className={styles["gradient-line"]}></div>
      <div className={styles.text}>
        <h1>Исторические даты</h1>
      </div>
      <Pagination
        handleDotClick={handleDotClick}
        activeDot={activeDot}
        numDots={numDots}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <SliderContainer activeDot={activeDot} mockData={mockData} />
      <YearsContainer firstYear={firstYear} lastYear={lastYear} />
    </div>
  );
};

export default DesktopLayout;
