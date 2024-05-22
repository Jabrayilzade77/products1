import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function Detail() {
  let { id } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
  getDetail();
   
  }, [])
  

  async function getDetail() {
    const res = await fetch("http://localhost:3000/myapp/" + id);
    const data = await res.json();

    setProducts(data);
  }

  return (
    <div>
      <img src={products.image} alt="" />
      {products.title}
      {products.price}
    </div>
  );
}

export default Detail;
