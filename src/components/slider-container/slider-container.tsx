import React, { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { gsap } from "gsap";

import { MockData } from "@/types/event-types";

import * as styles from "./slider-container.module.scss";

interface SliderContainerProps {
  activeDot: number;
  mockData: MockData;
}

const SliderContainer: React.FC<SliderContainerProps> = ({
  activeDot,
  mockData,
}) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.75,
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 1,
            duration: 0.75,
          });
        },
      });
    }
  }, [activeDot]);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsPrevDisabled(swiperRef.current.isBeginning);
      setIsNextDisabled(swiperRef.current.isEnd);
    }
  };

  const getCategoryByIndex = (index: number) => {
    return mockData[index - 1].category;
  };

  const category = getCategoryByIndex(activeDot);

  return (
    <div className={styles["slider-container"]} ref={containerRef}>
      <p className={styles["category-text"]}>{category}</p>
      <div className={styles.separator}>
        <hr />
      </div>
      <Swiper
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: "auto",
            spaceBetween: 25,
            pagination: {
              clickable: true,
            },
            navigation: false,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 80,
            pagination: false,
            navigation: {
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            },
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
      >
        {mockData[activeDot - 1].events.map((event, index) => (
          <SwiperSlide key={index} className={styles["swiper-slide"]}>
            <div>
              <h3 className={styles.year}>{event.year}</h3>
              <p className={styles["event-description"]}>{event.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={styles["custom-prev"]}
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isPrevDisabled}
      >
        &lt;
      </button>
      <button
        className={styles["custom-next"]}
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isNextDisabled}
      >
        &gt;
      </button>
    </div>
  );
};

export default SliderContainer;
