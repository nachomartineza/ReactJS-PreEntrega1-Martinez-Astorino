import { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({ producto }) => {
  const { addItem } = useContext(CartContext);
  const [item, setItem] = useState(null);

  const onAdd = (quantity) => {
    console.log("Cantidad: " + quantity);
    addItem(item, quantity);
  };

  useEffect(() => {
    setItem(producto);
  }, [producto]);

  if (!item) {
    return <div>Cargando detalle del producto...</div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5 offset-md-1">
          {item.imagen && (
            <img src={item.imagen} alt={item.titulo} className="img-fluid" />
          )}
        </div>
        <div className="col-md-5">
          <h1>{item.titulo}</h1>
          <h3>{item.descripcion}</h3>
          <p>
            <b>${item.precio}</b>
          </p>
          <ItemCount stock={item.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;