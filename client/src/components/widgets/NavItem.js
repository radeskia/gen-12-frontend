import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import "../../assets/styles/nav.css";

const NavItem = ({ where, text, col, border }) => {
    return (
        <div className="nav-item-box">
            {/* <li>
                <Link
                    to={where}
                    className={`nav-item-link ${border}`}
                    style={{ color: col }}
                >
                    {text}
                </Link>
            </li> */}
            <Nav.Item as="li">
                <Link
                    to={where}
                    className={`nav-item-link ${border}`}
                    style={{ color: col }}
                >
                    {text}
                </Link>
            </Nav.Item>
            <span className="nav-item-span">&nbsp;</span>
        </div>
    );
};

export default NavItem;
