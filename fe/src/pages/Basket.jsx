import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketProvider';

function Basket() {

  const { basket,removeBasket } = useContext(BasketContext);

  return (
    <>
     {basket.map((x) => (
        <div>
          <div>
            <img src={x.image} alt="" />
          </div>
          <div>{x.title}</div>
          <div>{x.price}</div>
          <button onClick={() => removeBasket(x)}> remove</button>
        </div>
      ))}
    </>
  )
}

export default Basket