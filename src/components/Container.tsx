import React from "react";
import "@styles/styles.scss";

const Container: React.FC = () => {
  return (
    <div className="container">
      <div className="crosshair">
        <div className="vertical-line"></div>
        <div className="horizontal-line"></div>
      </div>
      <div className="circle"></div>
    </div>
  );
};

export default Container;
