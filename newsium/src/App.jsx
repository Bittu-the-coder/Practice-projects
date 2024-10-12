import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { NewsBoard } from "./components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <>
      <NavBar setCategory={setCategory}></NavBar>
      <NewsBoard category={category}></NewsBoard>
    </>
  );
};
export default App;
