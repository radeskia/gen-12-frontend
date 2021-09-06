import React from "react";
import RouteHeader from "../widgets/routeheader";
import Dashboard from "../ui/Dashboard";

function Brunch(props) {
  return (
    <div>
      <RouteHeader title="Brunch" />
      <Dashboard route="brunch"/>      
    </div>
  );
}

export default Brunch;
