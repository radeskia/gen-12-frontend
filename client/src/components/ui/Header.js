// import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useState } from "react";
import Logo from "../widgets/Logo";
import Nav from "../widgets/navmenu/nav";
import Button from "../widgets/Button";
import NavItem from "../widgets/NavItem";

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
            {/* <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Link to="/">Home</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/login">login</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/register">register</Link>
                </Nav.Item>
            </Nav> */}
            <Nav />
            {user ? (
                <ul style={{ display: "flex", marginRight: "40px" }}>
                    <NavItem
                        // className={"borderrr"}
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
                    <NavItem
                        where={"/lunch"}
                        text={"Log Out"}
                        border={"border"}
                    />
                </ul>
            ) : (
                <div className="header-btn">
                    <Button btn={"white"} text={"Sing In"} where={"login"} />
                    <span className="or">or</span>
                    <Button
                        btn={"green"}
                        text={"Create Account"}
                        where={"register"}
                    />
                </div>
            )}
            {/* <div className="header-btn">
              <Button btn={"White"} text={"Sing In"} where={"login"} />
              <Button
                  btn={"Green"}
                  text={"Create Account"}
                  where={"register"}
              />
          </div> */}
        </div>
    );
};

export default Header;
