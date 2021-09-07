import React from "react";
import RouteHeader from "../widgets/routeheader";
import { useEffect, useState } from "react";
import axios from "axios";

function Logout() {
  const [reload, setReload] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/logout")
      .then((res) => console.log(res.data.message))
      .then(localStorage.clear())
      .then(setReload(true));
  }, []);
  return (
    <div>
      {reload ? (
        <RouteHeader title="Logged out!" />
      ) : (
        <RouteHeader title="Logged out!" />
      )}
    </div>
  );
}

export default Logout;
