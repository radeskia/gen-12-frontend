import React from "react";
import RouteHeader from "../widgets/routeheader";
import { useEffect } from "react";
import axios from "axios";

function Logout(props) {
  const {setLogged} = props;
  
  useEffect(() => {
    axios
      .get("/logout")
      .then((res) => {
        console.log(res.data.message);
        setLogged(false);
      })
      .then(localStorage.clear());
  }, []);
  return (
    <div>
      <RouteHeader title="Logged out!" />
    </div>
  );
}

export default Logout;
