import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import cart4 from "./images/cart4.svg"

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return (
        (cartTotal() > 0) ? <Link className="btn btn-light position-relative" to={"./Cart"}>
            <img src={cart4} alt="Cart" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link> : ""
    )
}

export default CartWidget;