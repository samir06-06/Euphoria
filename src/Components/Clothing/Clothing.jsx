import { useDispatch, useSelector } from "react-redux"
import P_Card from "../P_Card/P_Card"
import "../Clothing/Clothing.scss"
import { useEffect } from "react"
import { fetchProducts } from "../../redux/slice/ProductsSlice"

function Clothing() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const products = useSelector((state) => state.products.products)

  return (
    <div id="clothing">
      <div id="head">
        <h2 className="gender-choice">Clothing</h2>
        <div className="new-rec">
          <h2 className="new">New</h2>
          <h2>Recommended</h2>
        </div>
      </div>
      <div className="cards">
        {products &&
          products.map((product) => (
            <P_Card
              key={product.id}
              product={product}
              maxLength={20}
              maxWidth="200px"
            />
          ))}
      </div>
    </div>
  )
}

export default Clothing
