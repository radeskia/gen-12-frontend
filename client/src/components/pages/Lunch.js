import React from "react";
import RouteHeader from "../widgets/routeheader";
import Dashboard from "../ui/Dashboard";

function Lunch(props) {
  return (
    <div>
      <RouteHeader title="Lunch" />
      <Dashboard route="lunch"/>      
    </div>
  );
}

export default Lunch;
