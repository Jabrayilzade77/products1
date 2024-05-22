import React, { useContext } from 'react'
import { WishListContext } from '../context/WishListProvider';

function Basket() {

  const { wishList,addwishList, isExitsWishList } = useContext(WishListContext);


  return (
    <>
     {wishList.map((x) => (
        <div>
          <div>
          <div onClick={() => addwishList(x)}>
            {isExitsWishList(x) ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </div>
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