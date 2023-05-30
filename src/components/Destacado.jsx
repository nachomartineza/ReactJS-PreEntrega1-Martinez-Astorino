import Destacado2 from "./Destacado2";

const Destacado = () => {
    return (
        <>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col text-center">
                    <img src={"./imagenes1/GPSpain22.jpg"} alt="Spain GP" className="img-fluid" />
                    <h2 className="my-3">Spain GP Tickets</h2>
                    <a href="/" className="btn btn-dark">Buy</a>
                </div>
            </div>
        </div>
        <Destacado2 />
        </>
    )
}

export default Destacado;