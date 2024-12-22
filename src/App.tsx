import React from "react";
import * as styles from "./app.module.scss";
import Container from "./components/container/container";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Container></Container>
    </div>
  );
};

export default App;
