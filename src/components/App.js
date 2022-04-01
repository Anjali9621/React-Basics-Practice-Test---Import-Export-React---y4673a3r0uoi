import React, { Component, useState } from "react";
import "../styles/App.css";
import SubmitButton from "./SubmitButton";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import InputQuery from "./InputQuery";
const App = () => {
  return (
    <div id="main">
      <SubmitButton />
      <Heading />
      <SubHeading />
      <InputQuery />
    </div>
  );
};
export default App;
