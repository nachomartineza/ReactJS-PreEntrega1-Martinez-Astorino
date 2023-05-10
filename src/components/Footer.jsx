import twitter from "./images/twitter-footer.svg"
import instagram from "./images/instagram.svg"
import youtube from "./images/youtube.svg"
import efe1 from "./images/efe1.svg"

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
                        <a href="https://twitter.com/f1" className="text-ligth me-1"><img src={twitter} alt="twitter" width={33} /></a>
                        <a href="https://www.instagram.com/f1/" className="text-ligth me-1"><img src={instagram} alt="Instagram" width={33} /></a>
                        <a href="https://www.youtube.com/F1" className="text-ligth me-1"><img src={youtube} alt="youtube" width={33} /></a>
                    </div>
                    <div className="col-md-2">
                        <a href="#" className="text-ligth me-1"><img src={efe1} alt="F1" width={200} /></a>
                    </div>
                </div>
            </div>
        </div>
            
    )   
}

export default Footer;