import React from "react";
import RouteHeader from "../widgets/routeheader";
import Dashboard from "../ui/Dashboard";

function Breakfast(props) {
  return (
    <div>
      <RouteHeader title="Breakfast" />
      <Dashboard />
    </div>
  );
}

export default Breakfast;
