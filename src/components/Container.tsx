import React from "react";
import "@styles/styles.scss";
import CircleWithDots from "./circle-with-dots";

const Container: React.FC = () => {
  return (
    <div className="container">
      <div className="crosshair">
        <div className="vertical-line"></div>
        <div className="horizontal-line"></div>
      </div>
      {/* <div className="circle"></div> */}
      <CircleWithDots />
      <div className="gradient-line"></div>
      <div className="text">
        <h1>Исторические даты</h1>
      </div>
    </div>
  );
};

export default Container;
