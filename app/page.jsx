import React from "react";
import TickerCard from "./{components}/TickerCard";

const dashboard = () => {
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TickerCard />
        <TickerCard />
        <TickerCard />
        <TickerCard />
        <TickerCard />
      </div>
    </div>
  );
};

export default dashboard;
