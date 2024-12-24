import React, { useEffect, useState } from "react";

import Layout from "./components/layout/layout";

import * as styles from "./app.module.scss";

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.App}>
      <Layout isMobile={isMobile} />
    </div>
  );
};

export default App;
