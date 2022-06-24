import React from "react";
import Global from "./styles/global";
import Resume from "./components/Resume/index"
import Header from "./components/header/index"

const App = () => {
  return (
    <div>
      <Header></Header>
      <Resume></Resume>
      <Global></Global>
      </div>
  );
};

export default App;
