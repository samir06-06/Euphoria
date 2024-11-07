import React, { useEffect } from "react";
import "./orderSumCard.scss";
import { Divider } from "antd";
import Product4 from "./../../assets/img/product4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsForBasket, fetchUsers } from "../../redux/slice/UserSlice";

const OrderSummeryCard = () => {
  const basket = useSelector(state => state.user.basket)
  let total = 0;
  let basketCount = 0;
  const shippingFee = 2.99
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers()).then(() => {
      dispatch(fetchProductsForBasket());
    });
    // basket && basket.map(elem => {
    //     // console.log(basket, 'basket')
    //     // setTotal(total + elem.price)
    //     console.log(total + elem.price)
    // })
  }, []);
  return (
    <div className="order-summery">
      <div className="order-summery-heading">Order Summery</div>
      <Divider style={{ margin: "12px 0px 0px 0px" }} />

      <div className="orders">
        {
          basket && basket.map(elem => {
            total += elem.price;
            basketCount++;
            return <div className="order-item">
              <div className="ordered-item">
                <div className="left-sect">
                  <div className="product-img">
                    <img src={elem.img} alt="" />
                  </div>
                  <div className="product-content">
                    <h3>
                      {elem.name}
                      {/* <span className="quantity">3</span> */}
                    </h3>
                    <h3>
                      Color : <span className="product-color">{elem.color}</span>
                    </h3>
                  </div>
                </div>
                <div className="right-sect">
                  <div className="item-price">
                    $ <span>{elem.price}</span>
                  </div>
                </div>
              </div>
            </div>
          })
        }

      </div>
      <div className="subtotal-saving">
        <div className="subtotal">
          <h2 style={{ textAlign: "left" }}>Subtotal <span>( <span>{basketCount} </span>items )</span></h2>
          <h2 style={{ textAlign: "right" }}>${total}</h2>
        </div>
        <div className="saving">
          <h2 style={{ textAlign: "left" }}>Saving</h2>
          <h2 style={{ textAlign: "right" }}>$0.00</h2>
        </div>
      </div>
      <Divider style={{ margin: "12px 0px 0px 0px" }} />
      <div className="shipping">
        <h2 style={{ textAlign: "left" }}>Shipping </h2>
        <h2 style={{ textAlign: "right" }}>${shippingFee * basketCount}</h2>
      </div>
      <Divider style={{ margin: "12px 0px 0px 0px" }} />
      <div className="total">
        <h2 style={{ textAlign: "left" }}>Total </h2>
        <h2 style={{ textAlign: "right" }}>${total + shippingFee * basketCount}</h2>
      </div>
    </div>
  );
};

export default OrderSummeryCard;
