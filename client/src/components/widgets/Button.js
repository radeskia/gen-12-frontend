import { Link } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";

import "../../assets/styles/nav.css";
const Buton = ({ btn, text, where }) => {
    return (
        <>
            <Link to={where} className={`${btn} button`}>
                {text}
            </Link>
        </>
    );
};

export default Buton;
