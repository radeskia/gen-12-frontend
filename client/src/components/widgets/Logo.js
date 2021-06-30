import { Link } from "react-router-dom";
import "./../../assets/styles/logo.css";

const Logo = ({ color }) => {
    return (
        // <Link to="/" style={{ position: "relative", marginLeft: "30px" }}>
        <Link to="/" className={`logo-box logo-box-${color}`}>
            <div className="logo">Baby's</div>
            <span className="logo-span">food place</span>
        </Link>
    );
};

export default Logo;
