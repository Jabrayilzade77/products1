import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <>
      <footer className={styles.footer_container}>
        <div className={styles.footer_container_desc}>
        <div className={styles.about_container}>
          <p className={styles.about_title}>About Us</p>
          <span className={styles.about_desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua.
          </span>
        </div>

        <div className={styles.about_container}>
          <p className={styles.about_title}>Newsletter</p>
          <span className={styles.about_desc}>Stay update with our latest</span>
          <div>
            <input type="text" name="" id="" Enter Email />
            <button>
              <i className="fa-solid fa-right-long"></i>
            </button>
          </div>
        </div>

        <div className={styles.about_instagram}>
          <p className={styles.about_title}>Instragram Feed</p>
          <div className={styles.footer_image}>
            <img
              src="https://preview.colorlib.com/theme/shop/img/i1.jpg"
              alt=""
            />
            <img
              src="	https://preview.colorlib.com/theme/shop/img/i2.jpg"
              alt=""
            />
            <img
              src="	https://preview.colorlib.com/theme/shop/img/i3.jpg"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/shop/img/i4.jpg"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/shop/img/i5.jpg"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/shop/img/i6.jpg"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/shop/img/i7.jpg"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/shop/img/i8.jpg"
              alt=""
            />
          </div>
        </div>

        <div className={styles.about_container}>
          <p className={styles.about_title}>Follow Us</p>
          <span className={styles.about_desc}>Let us be social</span>
          <div>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-solid fa-basketball"></i>
            <i class="fa-brands fa-behance"></i>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
