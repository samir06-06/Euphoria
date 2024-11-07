import React, { useEffect } from 'react'
import "./wishlistCard.scss"
import { HiXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsForBasket, fetchUsers, updateBasket, updateWishlist } from '../../redux/slice/UserSlice';
import { fetchProducts } from '../../redux/slice/ProductsSlice';
import { setColor, setSize } from '../../redux/slice/selector';
import Swal from 'sweetalert2';

const WishlistCard = ({item}) => {
    const size = useSelector((state) => state.selector.size)
    const color = useSelector((state) => state.selector.color)
    const basket = useSelector(state => state.user.basket)
    const dispatch=useDispatch()
 
    useEffect(() => {
      dispatch(fetchUsers())
      dispatch(fetchProductsForBasket())
      dispatch(fetchProducts())
      
  }, [dispatch]);

    return (
    <div className="wishlist-item" key={item?.id}>
            <div className="left-sect">
              <div className="delete-btn" onClick={()=>{
                dispatch(updateWishlist(item?.id))
              }}>
                <HiXMark fontSize={22} />
              </div>
              <div className="product-img">
                <img src={item?.img?.[0]} alt="" />
              </div>
              <div className="product-content">
                <h3>{item?.name}</h3>
                <h3>
                  Color : <span className="product-color">{item?.color?.[0]}</span>
                </h3>
                <h3>
                  Quantity : <span className="product-quantity">{item?.stock}</span>
                </h3>
              </div>
            </div>
            <div className="right-sect">
            <div className="delete-btn-mobile" onClick={()=>{
                dispatch(updateWishlist(item?.id))
              }}>
                <HiXMark fontSize={22} />
              </div>
              <div className="wishlist-product-price">
                <h2>
                  $ <span>{item?.price}.00</span>
                </h2>
              </div>
              <div className="add-to-cart-btn" onClick={() => {
                 
                 dispatch(setColor(item?.color?.[0]))
                 dispatch(setSize(item?.sizes?.[0]))

                  
                            const addedObj = {
                                id: item?.id,
                                size: size,
                                color: color,
                                price: item?.price,
                                img: item?.img?.[0]
                            }
                            dispatch(updateBasket(addedObj))
                            // dispatch(fetchProductsForBasket())
                            dispatch(fetchUsers()).then(() => {
                                dispatch(fetchProductsForBasket());
                            });
                        
                    }}>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
  )
}

export default WishlistCard