import React from "react";
import RouteHeader from "../widgets/routeheader";
import Dashboard from "../ui/Dashboard";

function Dinner(props) {
  return (
    <div>
      <RouteHeader title="Dinner" />
      <Dashboard route="dinner"/>
    </div>
  );
}

export default Dinner;
