import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../widgets/Logo";
import Nav from "../widgets/navmenu/nav";
import "../../assets/styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-box">
                <Logo color="white" />
                <Nav />
                <div className="copyright">
                    <p>
                        Baby's Food Place <br /> copyright &copy; 2021
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
