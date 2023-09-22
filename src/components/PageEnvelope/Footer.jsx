import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div>
                <a href="lithimgwebi.vercel.app/">@PoweredByLithi</a>
            </div>
            <div>
                <p>2023.07</p>
            </div>
            <div>
                <Link to="/copyright">
                    <button>
                        Copyright
                    </button>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;