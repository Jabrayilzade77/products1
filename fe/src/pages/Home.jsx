import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../context/BasketProvider";
import { WishListContext } from "../context/WishListProvider";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

function Home() {
  const [products, setProducts] = useState([]);

  const { addBasket } = useContext(BasketContext);
  const { addwishList, isExitsWishList } = useContext(WishListContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/myapp");
    const data = await res.json();

    setProducts(data);
  }

  return (
    <>
      <main>
        <section>
          <div className={styles.happening_container}>
            <div className={styles.qiz_oglan_container}>
              <img
                src="https://preview.colorlib.com/theme/shop/img/header-img.png"
                alt=""
                className={styles.qiz_oglan_image}
              />
            </div>
            <div className={styles.flat_container}>
              <div className={styles.flat_and_yetmis_bes}>
                {" "}
                <p className={styles.flat}>Flat</p>
                <span className={styles.yetmis_bes_faiz}>75%Off</span>
              </div>
              <h2 className={styles.happning_season}>
                IT’S HAPPENING THIS SEASON!
              </h2>
              <button className={styles.purcase_btn}>PURCHASE NOW</button>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.categories_container}>
            <div className={styles.categories_title_div}>
              <p className={styles.shop_title}>Shop for Different Categories</p>
              <span className={styles.extremely}>
                Who are in extremely love with eco friendly system.
              </span>
            </div>

            <div className={styles.categories_cards_container}>
              <div className={styles.left_container}>
                <div className={styles.down_two_pictures}>
                  <div>
                    <img
                      src="https://preview.colorlib.com/theme/shop/img/c1.jpg"
                      alt=""
                      className={styles.down_two_pictures_left}
                    />
                  </div>
                  <div>
                    <img
                      src="	https://preview.colorlib.com/theme/shop/img/c2.jpg"
                      alt=""
                      className={styles.down_two_pictures_rigth}
                    />
                  </div>
                </div>
                <div className={styles.up__pictures}>
                  <img
                    src="https://preview.colorlib.com/theme/shop/img/c3.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.rigth_container}>
                <img
                  src="https://preview.colorlib.com/theme/shop/img/c4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.products_men_container}>
            <div className={styles.products_men_overlay}>
              <div className={styles.realized_title_container}>
                <p className={styles.realized_title}>
                  New realeased Products for Men{" "}
                </p>
                <span className={styles.friendly}>
                  Who are in extremely love with eco friendly system.
                </span>
              </div>

              <div className={styles.products_cards_container}>
                <div className={styles.product_card_items}>
                  <img
                    src="https://preview.colorlib.com/theme/shop/img/l1.jpg"
                    alt=""
                    className={styles.card_image}
                  />
                  <p className={styles.card_title}>Long Sleeve shirt</p>
                  <span className={styles.card_price}>$150.00</span>
                </div>

                <div className={styles.product_card_items}>
                  <img
                    src="https://preview.colorlib.com/theme/shop/img/l2.jpg"
                    alt=""
                    className={styles.card_image}
                  />
                  <p className={styles.card_title}>Long Sleeve shirt</p>
                  <span className={styles.card_price}>$150.00</span>
                </div>

                <div className={styles.product_card_items}>
                  <img
                    src="https://preview.colorlib.com/theme/shop/img/l3.jpg"
                    alt=""
                    className={styles.card_image}
                  />
                  <p className={styles.card_title}>Long Sleeve shirt</p>
                  <span className={styles.card_price}>$150.00</span>
                </div>

                <div className={styles.product_card_items}>
                  <img
                    src="	https://preview.colorlib.com/theme/shop/img/l4.jpg"
                    alt=""
                    className={styles.card_image}
                  />
                  <p className={styles.card_title}>Long Sleeve shirt</p>
                  <span className={styles.card_price}>$150.00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className={styles.realized_title_container}>
              <p className={styles.realized_women_title}>
                New realeased Products for Men{" "}
              </p>
              <span className={styles.friendly_women}>
                Who are in extremely love with eco friendly system.
              </span>
            </div>
            <div className={styles.api_cards_container}>
              {products.map((x) => (
                <div key={x._id} className={styles.wishList_and_other_btns}>
                  <div
                    onClick={() => addwishList(x)}
                    className={styles.wishList_and_other_btns}
                  >
                    {isExitsWishList(x) ? (
                      <i className="fa-solid fa-heart"></i>
                    ) : (
                      <i className="fa-regular fa-heart"></i>
                    )}
                  </div>

                  <div className={styles.product_card_items}>
                    <div>
                      <img src={x.image} alt="" className={styles.card_image} />
                    </div>
                    <div className={styles.api_card_title}>{x.title}</div>
                    <div className={styles.api_card_price}>${x.price}</div>
                    <div className={styles.wishList_basket_btns}>
                      <button
                        onClick={() => addBasket(x)}
                        className={styles.basket_btn}
                      >
                        add basket
                      </button>
                      <button className={styles.detail_btn}>
                        <Link to={"/detail/" + x._id}>go detail</Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className={styles.realeted_container}>
            <div className={styles.realized_title_container}>
              <p className={styles.realized_women_title}>
                Related Searched Products
              </p>
              <span className={styles.friendly_women}>
                Who are in extremely love with eco friendly system.
              </span>
            </div>

            <div className={styles.related_cards_container}>
              <div className={styles.related_card_item}>
                <div className={styles.related_image_div}>
                  <img
                    src="https://preview.colorlib.com/theme/shop/img/r1.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.related_desc}>
                  <p className={styles.black}>Black lace Heels</p>
                  <span> $189.00</span>
                </div>
              </div>

              <div className={styles.related_card_item}>
                <div className={styles.related_image_div}>
                  <img
                    src="https://preview.colorlib.com/theme/shop/img/r2.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.related_desc}>
                  <p className={styles.black}>Black lace Heels</p>
                  <span> $189.00</span>
                </div>
              </div>
              <div className={styles.related_card_item}>
                <div className={styles.related_image_div}>
                  <img
                    src="	https://preview.colorlib.com/theme/shop/img/r3.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.related_desc}>
                  <p className={styles.black}>Black lace Heels</p>
                  <span> $189.00</span>
                </div>
              </div>
              <div className={styles.related_card_item}>
                <div className={styles.related_image_div}>
                  <img
                    src="https://preview.colorlib.com/theme/shop/img/r4.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.related_desc}>
                  <p className={styles.black}>Black lace Heels</p>
                  <span> $189.00</span>
                </div>
              </div>
              <div className={styles.related_card_item}>
                <div className={styles.related_image_div}>
                  <img
                    src="https://preview.colorlib.com/theme/shop/img/r5.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.related_desc}>
                  <p className={styles.black}>Black lace Heels</p>
                  <span> $189.00</span>
                </div>
              </div>
              <div className={styles.related_card_item}>
                <div className={styles.related_image_div}>
                  <img
                    src="	https://preview.colorlib.com/theme/shop/img/r6.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.related_desc}>
                  <p className={styles.black}>Black lace Heels</p>
                  <span> $189.00</span>
                </div>
              </div>
              <div className={styles.related_card_item}>
                <div className={styles.related_image_div}>
                  <img
                    src="https://preview.colorlib.com/theme/shop/img/r7.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.related_desc}>
                  <p className={styles.black}>Black lace Heels</p>
                  <span> $189.00</span>
                </div>
              </div>
              <div className={styles.related_card_item}>
                <div className={styles.related_image_div}>
                  <img
                    src="https://preview.colorlib.com/theme/shop/img/r8.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.related_desc}>
                  <p className={styles.black}>Black lace Heels</p>
                  <span> $189.00</span>
                </div>
              </div>
              <div className={styles.related_card_item}>
                <div className={styles.related_image_div}>
                  <img
                    src="	https://preview.colorlib.com/theme/shop/img/r9.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.related_desc}>
                  <p className={styles.black}>Black lace Heels</p>
                  <span> $189.00</span>
                </div>
              </div>
              <div className={styles.related_card_item}>
                <div className={styles.related_image_div}>
                  <img
                    src="https://preview.colorlib.com/theme/shop/img/r10.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.related_desc}>
                  <p className={styles.black}>Black lace Heels</p>
                  <span> $189.00</span>
                </div>
              </div>
              <div className={styles.related_card_item}>
                <div className={styles.related_image_div}>
                  <img
                    src="https://preview.colorlib.com/theme/shop/img/r11.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.related_desc}>
                  <p className={styles.black}>Black lace Heels</p>
                  <span> $189.00</span>
                </div>
              </div>
              <div className={styles.related_card_item}>
                <div className={styles.related_image_div}>
                  <img
                    src="https://preview.colorlib.com/theme/shop/img/r12.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.related_desc}>
                  <p className={styles.black}>Black lace Heels</p>
                  <span> $189.00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

       
      </main>
    </>
  );
}

export default Home;
