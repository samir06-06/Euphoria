import Clothing from "../../Components/Clothing/Clothing.jsx"
import ClothingFor from "../../Components/ClothingFor/ClothingFor.jsx"
import Filter from "../../Components/Filter/Filter.jsx"
import "./style.scss"
function ProductsDetail() {
  return (
    <>
      <div className="container product-list">
        <Filter />
        <Clothing />
      </div>
      <div className="container">
        <ClothingFor />
      </div>
    </>
  )
}

export default ProductsDetail
