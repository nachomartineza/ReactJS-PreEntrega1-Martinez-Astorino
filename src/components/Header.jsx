import fialogo from "./images/fialogo.svg";
import f1com from "./images/F1com.svg"
import NavBar from "./Navbar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='container-fluid'>
            <div className="row bg-body-secondary p-3">
                <div className="col-md-6">
                    <Link to={"https://www.fia.com/"} target={"_blank"} rel={"noreferrer"}><img src={fialogo} alt={"FIA"} width={24} /></Link>
                </div>
                <div className="col-md-6 text-end">
                    <Link to={"/"} className="text-dark text-decoration-none">Support</Link> | <Link to={"/"} className="text-dark text-decoration-none">Buy tickets</Link>
                </div>
                <div className="row p-3">
                    <div className="col-md-4">
                        <Link to={"/"}><img src={f1com} alt={"F1"} width={80} /></Link>
                    </div>
                    <div className="col-md-4 text-center">
                        <NavBar />
                    </div>
                    <div className="col-md-4 text-end">
                        <CartWidget />
                    </div>
                </div>
            </div >
        </div >

    )
}

export default Header;