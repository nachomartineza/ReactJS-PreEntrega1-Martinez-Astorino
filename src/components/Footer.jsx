import twitter from "./images/twitter-footer.svg"
import instagram from "./images/instagram.svg"
import youtube from "./images/youtube.svg"
import efe1 from "./images/efe1.svg"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container-fluid text-light bg-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <h6>F1 Merch</h6>
                    </div>
                    <div className="col-md-2">
                        <h6>About F1</h6>
                    </div>
                    <div className="col-md-4 text-end">
                        <Link to={"https://twitter.com/F1"} className="text-light me-1"><img src={twitter} alt={"Twitter"} width={32} /></Link>
                        <Link to={"https://www.instagram.com/f1/"} className="text-light me-1"><img src={instagram} alt={"Instagram"} width={32} /></Link>
                        <Link to={"https://www.youtube.com/@Formula1"} className="text-light me-1"><img src={youtube} alt={"YouTube"} width={32} /></Link>

                    </div>
                    <div className="col-md-2">
                        <Link to={"https://www.formula1.com/"} className="text-light me-1"><img src={efe1} alt={"f1"} width={200} /></Link>
                    </div>
                </div>
            </div>
        </div>
            
    )   
}

export default Footer;