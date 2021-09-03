import { useState } from "react";
import Logo from "../widgets/Logo";
import Nav from "../widgets/navmenu/nav";
import Button from "../widgets/Button";
import NavItem from "../widgets/NavItem";
import jwt_decode from "jwt-decode";
import "../../assets/styles/nav.css";

const Header = () => {
  const [user, setUser] = useState(false);

  return (
    <div
      className="header-box"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <Logo />
      <Nav />
      {user ? (
        <ul style={{ display: "flex", marginRight: "40px" }}>
          <NavItem
            where={"/myrecipes"}
            text={"My Recipies"}
            col={"green"}
            border={"border"}
          />
          <NavItem
            where={"/myprofile"}
            text={"My Profile"}
            col={"orange"}
            border={"border"}
          />
          <NavItem where={"/logout"} text={"Log Out"} border={"border"} />
        </ul>
      ) : (
        <div className="header-btn">
          <Button btn={"white"} text={"Sing In"} where={"login"} />
          <span className="or">or</span>
          <Button btn={"green"} text={"Create Account"} where={"register"} />
        </div>
      )}
    </div>
  );
};

export default Header;
