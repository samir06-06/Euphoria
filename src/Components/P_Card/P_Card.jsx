import "../P_Card/P_Card.scss";
import {
  fetchProductsInU,
  fetchUsers,
  updateWishlist,
} from "../../redux/slice/UserSlice";
import useSelection from "antd/es/table/hooks/useSelection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
function P_Card({ product, maxLength, maxWidth }) {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.user.wishlist);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchProductsInU());
  }, [dispatch]);

  return (
    <div id="p_card">
      <div
        className="icon-wrapper"
        onClick={() => {
          dispatch(updateWishlist(product?.id));
        }}
      >
        {wishlist && wishlist.find((item) => item.id == product?.id) ? (
          <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </div>

      <img src={product.img[0]} alt={product.name} />
      <div className="p_card_text">
        <div className="p_card_names">
          <h5 style={{ maxWidth: maxWidth }}>
            {truncateText(product.name, maxLength)}
          </h5>
          <p>{product.brand}</p>
        </div>
        <span>${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default P_Card;
