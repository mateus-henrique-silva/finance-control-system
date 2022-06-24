import React from "react";
import Global from "./styles/global";
import Resume from "./components/Resume/index";
import Header from "./components/header/index";
import Form from "./components/form/index"

const App = () => {
  return (
    <div>
      <Header></Header>
      <Resume></Resume>
      <Form></Form>
      <Global></Global>
      </div>
  );
};

export default App;
