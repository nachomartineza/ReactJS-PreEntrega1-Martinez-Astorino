import cart4 from "./images/cart4.svg"

const CartWidget = () => {
    return (
        < div >
            <button type="button" className="btn btn-secondary position-relative">
                <img src={cart4} alt="Carrito" width={25}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>
        </div >
    )   
}

export default CartWidget;