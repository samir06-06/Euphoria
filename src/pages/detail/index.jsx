import { useDispatch, useSelector } from "react-redux"
import DetailDescription from "../../Components/detailDescription"
import DetailOpening from "../../Components/detailOpening"
import Limelight from "../../Components/limelight"
import "./style.scss"
// import { fetchProducts } from '../../redux/slice/ProductsSlice'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useTranslation } from "react-i18next"

function ProductDetail() {
  // const dispatch = useDispatch()
  const { id } = useParams()
  const [product, setProduct] = useState([])
  useEffect(() => {
    // dispatch(fetchProducts())
    axios
      .get("http://localhost:3000/products/" + id)
      .then((res) => {
        setProduct(res.data)
      })
      .then(() => {
        // console.log(product, 'from detail')
      })
    // console.log(id)
  }, [id])
  const { t } = useTranslation()
  return (
    <div className="ProductDetail">
      <div className="container">
        {product && (
          // product.length > 0 &&
          <DetailOpening product={product} />
        )}
        {product && <DetailDescription product={product} />}
        {product && (
          <Limelight
            type={t("similar_products")}
            count={8}
            product={product}
            suggested={product}
          />
        )}
      </div>
    </div>
  )
}

export default ProductDetail
