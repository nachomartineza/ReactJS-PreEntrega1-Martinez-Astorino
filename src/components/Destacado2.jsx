const Destacado2 = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <p><img src={"./imagenes1/GPcanada22.jpg"} alt="Canada GP" className="img-fluid" /></p>
                    <h3>Canadian GP Tickets</h3>
                    <p><a href="/" className="btn btn-dark">Buy</a></p>
                </div>
                <div className="col-md-6">
                    <p><img src={"./imagenes1/GPaustria22.jpeg"} alt="Austrian GP" className="img-fluid" /></p>
                    <h3>Austrian GP Tickets</h3>
                    <p><a href="/" className="btn btn-dark">Buy</a></p>
                </div>
            </div>
        </div>
    )
}

export default Destacado2;
