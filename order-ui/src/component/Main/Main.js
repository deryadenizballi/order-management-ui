import React, { useState } from "react";
import "./Main.css";
import Filter from "../Filter/Filter";
import OrderListCard from "../OrderListCard/OrderListCard";

const Main = () => {
  return (
    <div className="main">
      <Filter />
      <OrderListCard />
    </div>
  );
};

export default Main;
