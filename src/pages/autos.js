import Products from "@/components/Products";
import { useState, useEffect } from "react";

export default function autos() {
  //En algun lado tenemos que guardar los productos de la API
  //-> los guardamos en un estado
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    //llamamos a la API con fetch
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json()) //formateamos la respuesta
      .then((data) => setProductos(data)); //con la respuesta ya en un formato que podemos usar -> la guardamos en el estado
  }, [productos]);

  return (
    <>
      {productos?.map((producto) => (
        <Products title={producto.title} price={producto.price} />
      ))}
    </>
  );
}
