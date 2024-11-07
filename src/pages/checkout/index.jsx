import style from "./Checkout.module.scss"
import Image from "../../assets/img/savingDown.png"
import ProfileHeading from "../../Components/profileHeading"
import FormikForAddress from "../../Components/formikForAddress"
import FormikForCheckout from "../../Components/formikForCheckout"
import { Divider } from "antd"
import OrderSummeryCard from "../../Components/orderSumCard"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useSelector } from "react-redux"

const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState("billing")
  const [selectedMethod, setSelectedMethod] = useState("card")
  const navigate = useNavigate()
  const basket = useSelector((state) => state.user.basket)
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }
  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value)
  }

  return (
    <div className={style["body"]}>
      <ProfileHeading page={"Check Out"} />
      <div className={style["checkout-section-heading"]}>
        <div className={style["profile-name"]}>
          <h1>Check Out</h1>
        </div>
        <span className={style.billingD}>Billing Details</span>
      </div>

      <main>
        <section className={style["left-sect"]}>
          <FormikForCheckout />
          <Divider />
          <div className={style["choose-shipping-add"]}>
            <div className={style["choose-shipping-add-heading"]}>
              <h2>Shipping Address</h2>
              <p>
                Select the address that matches your card or payment method.
              </p>
            </div>

            <div className={style["address-selection"]}>
              <label>
                <input
                  type="radio"
                  value="billing"
                  checked={selectedOption === "billing"}
                  onChange={handleOptionChange}
                />
                Same as Billing address
              </label>
              <Divider />
              <label>
                <input
                  type="radio"
                  value="shipping"
                  checked={selectedOption === "shipping"}
                  onChange={handleOptionChange}
                />
                Use a different shipping address
              </label>
            </div>
          </div>
          <Divider />
          <div className={style["choose-paymant-method"]}>
            <div className={style["choose-shipping-add-heading"]}>
              <h2>Payment Method</h2>
              <p>All transactions are secure and encrypted</p>
            </div>
            <div className={style["paymantM-selection"]}>
              <label>
                <input
                  type="radio"
                  value="card"
                  checked={selectedMethod === "card"}
                  onChange={handleMethodChange}
                />
                Credit Card
              </label>
              <Divider />
              <label>
                <input
                  type="radio"
                  value="cash"
                  checked={selectedMethod === "cash"}
                  onChange={handleMethodChange}
                />
                Cash on delivery
              </label>
              <Divider />
              <label>
                <input
                  type="radio"
                  value="paypal"
                  checked={selectedMethod === "paypal"}
                  onChange={handleMethodChange}
                />
                Paypal
              </label>
            </div>
          </div>
          <div className={style["pay-btn"]}>
            <button
              onClick={() => {
                navigate("/confirmed-order")
                axios.post("http://localhost:3000/purchases", basket)
              }}
            >
              Pay now
            </button>
          </div>
        </section>

        <section className={style["right-sect"]}>
          <OrderSummeryCard />
        </section>
      </main>
    </div>
  )
}

export default Checkout
