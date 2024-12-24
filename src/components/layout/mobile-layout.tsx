import React from "react";

import { MockData } from "@/types/event-types";
import Pagination from "../pagination/pagination";
import SliderContainer from "../slider-container/slider-container";
import YearsContainer from "../years-container/years-container";

import * as styles from "./mobile-layout.module.scss";

interface MobileLayoutProps {
  numDots: number;
  activeDot: number;
  handleDotClick: (index: number) => void;
  handlePrev: () => void;
  handleNext: () => void;
  mockData: MockData;
  firstYear: number;
  lastYear: number;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  numDots,
  activeDot,
  handlePrev,
  handleNext,
  handleDotClick,
  firstYear,
  lastYear,
  mockData,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Исторические даты</h1>
      </div>
      <YearsContainer firstYear={firstYear} lastYear={lastYear} />
      <SliderContainer activeDot={activeDot} mockData={mockData} />
      <Pagination
        handleDotClick={handleDotClick}
        activeDot={activeDot}
        numDots={numDots}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default MobileLayout;
