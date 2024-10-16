import React from "react";
import Sidebar from "./component/Sidebar/Sidebar";
import "./App.css";
import Main from "./component/Main/Main";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
