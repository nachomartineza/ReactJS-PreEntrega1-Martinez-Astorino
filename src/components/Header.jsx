import fialogo from "./images/fialogo.svg";
import f1com from "./images/F1com.svg"
import NavBar from "./Navbar";
import CartWidget from "./CartWidget";

const Header = () => {
    return (
        <div className='container-fluid'>
            <div className="row bg-body-secondary p-3">
                <div className="col-md-6">
                    <a href="https://www.fia.com/"><img src={fialogo} alt={"fia"} width={30} /></a>
                </div>
                <div className="col-md-6 text-end">
                    <a href="#" className="text-dark text-decoration-none">Buy Tickets</a> | <a href="#" className="text-dark text-decoration-none">Support</a>
                </div>
                <div className="row p-3">
                    <div className="col-md-4">
                        <a href="#"><img src={f1com} alt={"F1"} width={80} /></a>
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