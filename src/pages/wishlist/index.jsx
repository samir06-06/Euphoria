import "./wishlist.scss"
import EmptyWishlist from "../../Components/emptyWishlist"
import WishlistCard from "../../Components/wishlistCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchProductsInU, fetchUsers } from "../../redux/slice/UserSlice"

function WishList() {
  const dispatch = useDispatch()
  const wishlist = useSelector((state) => state.user.wishlist)

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchProductsInU())
  }, [dispatch])

  return (
    <div className="wishlist-body">
      <div className="container">
        {wishlist.length === 0 ? (
          <EmptyWishlist />
        ) : (
          <>
            {wishlist && (
              <div className="wishlist-main">
                <div className="wishlist-heading">
                  <h1>Wishlist</h1>
                </div>
                <div className="wishlist-items">
                  {wishlist.map((item) => (
                    <WishlistCard item={item} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default WishList
