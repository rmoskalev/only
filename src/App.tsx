import React from "react";
import * as styles from "./app.module.scss";
import Layout from "./components/layout/layout";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Layout />
    </div>
  );
};

export default App;
