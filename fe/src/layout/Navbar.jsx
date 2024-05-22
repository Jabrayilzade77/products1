import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BasketContext } from '../context/BasketProvider'
import { WishListContext } from '../context/WishListProvider'
import styles from './Navbar.module.scss';

function Navbar() {

    const {basket} = useContext(BasketContext)
    const {wishList} = useContext(WishListContext)
  return (
   <>

   <div className={styles.navbar_container}>

   <div className={styles.navbar_image_div}>
    <img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
   </div>
   
   <div className={styles.navbar_links}>
   <Link to={"/"}>Home</Link>
    <Link to={"/category"}>Category</Link>
    <Link to={"/men"}>Men</Link>
    <Link to={"/women"}>Women</Link>
    <Link to={"/basket"}>Basket {basket.length}</Link>
    <Link to={"/wishList"}>WishList {wishList.length}</Link>
    <Link to={"/admin"}>Admin</Link>
    <Link to={"/add"}>Add</Link>
   </div>

   </div>
   </>
  )
}

export default Navbar