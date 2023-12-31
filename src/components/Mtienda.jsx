import { useState, useEffect } from "react";
import Card from "./Card";
const API='https://dummyjson.com/products';

const Mtienda = () => {
  const [datos, setDatos] = useState([])
  const getDatos = async () =>{
    try {
      const response = await fetch(API);
      const data = await response.json();
      //console.log(data)
      setDatos(data.products);
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(()=>{
    getDatos();
  },[]);
  return (
    <div className="container">
      <h1 className="text-center py-5">Todos los Productos</h1>
      <div className="row">
          {datos && datos.map((productos)=>(
            <Card productos={productos} key={productos.id}/>
          ))}
      </div>
    </div>
  )
}

export default Mtienda