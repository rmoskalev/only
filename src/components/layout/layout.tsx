import React, { useState } from "react";

import mockData from "@/mock/data";

import DesktopLayout from "./desktop-layout";
import MobileLayout from "./mobile-layout";

interface LayoutProps {
  isMobile: boolean;
}

const Layout: React.FC<LayoutProps> = ({ isMobile }) => {
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
  };

  const activeCategory = mockData[activeDot - 1];
  const eventYears = activeCategory.events.map((event) => event.year);

  const firstYear = eventYears[0];
  const lastYear = eventYears[eventYears.length - 1];

  const sharedProps = {
    numDots,
    activeDot,
    handleDotClick,
    handlePrev,
    handleNext,
    mockData,
    firstYear,
    lastYear,
  };

  return isMobile ? (
    <MobileLayout {...sharedProps} />
  ) : (
    <DesktopLayout {...sharedProps} />
  );
};

export default Layout;
