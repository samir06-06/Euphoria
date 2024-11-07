// import './cart.scss';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsForBasket, fetchUsers, updateBasket } from "../../redux/slice/UserSlice";
import { fetchProducts } from "../../redux/slice/ProductsSlice";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const basket = useSelector(state => state.user.basket)
  const shippingFee = 2.99
  // const [total, setTotal] = useState(0);
  let total = 0;
  let basketCount = 0;
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
    <section className="text-[#3C4242]">
      <div className="grid grid-cols-3 px-24 py-6 bg-greyTitle text-[#ffffff] ">
        <div className="font-normal col-span-1 text-md leading-8 uppercase">
          Product Details
        </div>
        <div className="font-normal col-span-2 text-md leading-8 uppercase flex items-center gap-10">
          {["Price", "Shipping", "Subtotal", "Action"].map((e) => (
            // "Quantity",
            <span key={e} className="w-full max-w-[200px] text-center">
              {e}
            </span>
          ))}
        </div>
      </div>
      <div className="px-24 mt-7 lg-6 mx-auto ">
        {basket &&
          basket.map((elem) => {
            // console.log(basket, 'basket')
            total += elem.price;
            basketCount++;
            return (
              <>
                <div
                  key={uuidv4()}
                  className="grid grid-cols-3 border-b border-[#BEBCBD] last:border-none py-12 group"
                >
                  <div className="flex items-center flex-col col-span-1 min-[550px]:flex-row gap-7 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                    <div className="img-box">
                      <img
                        src={elem?.img}
                        alt="perfume bottle image"
                        className="xl:w-[140px]"
                      />
                    </div>
                    <div className="pro-data w-full max-w-sm ">
                      <h5 className="font-semibold text-md leading-8 text-[#3C4242] max-[550px]:text-center">
                        {elem.name}
                      </h5>
                      <p className="font-normal text-sm leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                        Color: {elem.color}
                      </p>
                      <h6 className="font-normal text-sm leading-8 text-indigo-600  max-[550px]:text-center">
                        Size: {elem.size}
                      </h6>
                    </div>
                  </div>
                  <div className="flex items-center flex-col col-span-2 min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-10 -m-2 pl-3 pr-10 ">
                    <h6 className="font-manrope font-bold text-lr leading-9 text-[#3C4242] w-full max-w-[176px] text-center">
                      ${elem.price}{" "}
                    </h6>
                    <div className="flex items-center w-full mx-auto">
                      <button className="group rounded-l-lg p-1 bg-[#F6F6F6]  flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                        <svg
                          className="stroke-[#3C4242] transition-all duration-500 group-hover:stroke-[#3C4242]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M16.5 11H5.5"
                            stroke="#3C4242"
                            stroke-width="1"
                            stroke-linecap="round"
                          />
                          <path
                            d="M16.5 11H5.5"
                            stroke="#3C4242"
                            stroke-opacity="0.2"
                            stroke-width="1"
                            stroke-linecap="round"
                          />
                          <path
                            d="M16.5 11H5.5"
                            stroke="#3C4242"
                            stroke-opacity="0.2"
                            stroke-width="1"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        className="bg-[#F6F6F6] outline-none text-[#3C4242] font-semibold text-md w-6 placeholder:text-gray-900 py-1 text-center bg-transparent"
                        placeholder="1"
                      />
                      <button className="group rounded-r-lg p-1 bg-[#F6F6F6]  flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                        <svg
                          className="stroke-[#3C4242] transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke="#3C4242"
                            stroke-width="1"
                            stroke-linecap="round"
                          />
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke="#3C4242"
                            stroke-opacity="0.2"
                            stroke-width="1"
                            stroke-linecap="round"
                          />
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke="#3C4242"
                            stroke-opacity="0.2"
                            stroke-width="1"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <h6 className="text-indigo-600 font-manrope font-bold text-lr leading-9 w-full max-w-[176px] pl-4">
                      ${shippingFee}
                    </h6>
                    <h6 className="text-indigo-600 font-manrope font-bold text-lr leading-9 w-full max-w-[176px]">
                      ${Number(elem.price) + Number(shippingFee)}
                    </h6>
                    <button
                      className="w-20"
                      onClick={() => {
                        dispatch(updateBasket(elem));
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="20"
                        height="20"
                      >
                        <path
                          fill="#8A33FD"
                          d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                        />
                      </svg>{" "}
                    </button>
                  </div>
                </div>
              </>
            );
          })}
      </div>

      <div className="bg-[#F6F6F6] px-24 py-10 w-full mt-20 grid grid-cols-2 gap-52">
        <div className="col-span-1">
          <p className="font-semibold text-lg text-[#3C4242]">Discount Codes</p>
          <p className="font-normal text-sm text-gray-500 mt-2 mb-7">
            Enter your Coupon if you have one
          </p>
          <span className="flex rounded-lg mt-6">
            <input
              type="text"
              className="py-3 px-4 block border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 border-solid border border-[#BEBCBD]"
            />
            <button className="bg-[#8A33FD] py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-[#ffffff] hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              Apply Coupon
            </button>
          </span>

          <button className="bg-[#ffffff] mt-10  text-[#3C4242] text-sm font-semibold py-3 px-10 rounded-lg border-solid border border-[#BEBCBD]">
            Continue Shopping
          </button>
        </div>
        <div className="col-span-1 flex flex-col">
          <div className="border-b border-[#BEBCBD] px-20">
            <div className="flex items-center justify-between w-full mb-1">
              <p className="font-normal text-md leading-8 text-gray-400">
                Sub Total
              </p>
              <h6 className="font-normal text-md leading-8 text-gray-900">
                ${total}
              </h6>
            </div>
            <div className="flex items-center justify-between w-full mb-6">
              <p className="font-normal text-md leading-8 text-gray-400">
                Shipping
              </p>
              <h6 className="font-normal text-md leading-8 text-gray-900">
                ${(shippingFee * basketCount).toFixed(2)}
              </h6>
            </div>
            <div className="flex items-center justify-between w-full pb-6 ">
              <p className="font-semibold text-md leading-8 text-gray-400">
                Grand Total
              </p>
              <h6 className="font-semibold text-md leading-8 text-gray-900">
                ${(total + shippingFee * basketCount).toFixed(2)}
              </h6>
            </div>
          </div>
          <button className="bg-[#8A33FD] mx-auto mt-10 text-[#ffffff] text-sm font-semibold py-3 px-10 rounded-lg border-solid border border-[#BEBCBD]"
            onClick={() => {
              navigate('/checkout')
            }}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
