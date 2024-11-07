import "../ClothingFor/ClothingFor.scss"
// import offer from "../../assets/img/Frame 114.png"
import db from "../../data/db.json"

// function findTotalPriceForPlainTShirts() {
//   let plainTShirts = db.products.filter(
//     (product) =>
//       product.category === "Plain T-shirts" && product.gender === "Women"
//   )

//   if (plainTShirts.length < 4) {
//     console.log("Not enough plain t-shirts for women available.")
//     return
//   }

//   plainTShirts.sort((a, b) => a.price - b.price)

//   let totalPrice = plainTShirts
//     .slice(0, 4)
//     .reduce((total, product) => total + product.price, 0)

//   console.log(
//     `The total price for 4 plain t-shirts for women is: $${totalPrice.toFixed(
//       2
//     )}`
//   )
// }

// findTotalPriceForPlainTShirts()

// Assume db.products is your array of products

function findTotalPriceForPlainTShirts() {
  let plainTShirts = db.products.filter(
    (product) =>
      product.category === "Plain T-shirts" && product.gender === "Women"
  )

  plainTShirts.sort((a, b) => a.price - b.price)

  let totalPrice = plainTShirts
    .slice(0, 3)
    .reduce((total, product) => total + product.price, 0)

  console.log(
    `The total price for 4 plain t-shirts for women is: $${totalPrice.toFixed(
      2
    )}`
  )
}

findTotalPriceForPlainTShirts()

function ClothingFor() {
  return (
    <div id="clothing_for">
      <h1 className="h1">
        <i className="fa-solid fa-minus"></i>Clothing for Women Online in India
      </h1>
      <h2 className="h2">
        Reexplore Women&apos;s Clothing Collection Online at Euphoria
      </h2>
      <p className="p">
        Women&apos;s Clothing Are you searching for the best website to buy
        Clothing for Women online in India? Well, your search for the coolest
        and most stylish womens clothing ends here. From trendy Casual Womens
        Wear Online shopping to premium quality cotton women&apos;s apparel,{" "}
        <span className="span">Euphoria</span> has closet of Women Collection
        covered with the latest and best designs of Women&apos;s Clothing
        Online.
      </p>
      <p className="p">
        Our collection of clothes for women will make you the trendsetter with
        an iconic resemblance of choice in Womens Wear.
      </p>
      <h2 className="h2">
        One-Stop Destination to Shop Every Clothing for Women: Euphoria
      </h2>
      <p className="p">
        Today, Clothing for Women is gaining more popularity above all. This is
        because gone are the days when women were used to carrying uncomfortable
        fashion. Today, a lady looks prettier when she is in Casual Womens Wear
        which is a comfortable outfit. Concerning this,{" "}
        <span className="span">Euphoria</span> has a big fat range of Stylish
        Women&apos;s Clothing that would make her the winner wherever she goes.
      </p>
      <p className="p">
        Our collection of clothes for women will make you the trendsetter with
        an iconic resemblance of choice in Womens Wear. It is quite evident to
        say that there are very few Womens Clothing online stores where you can
        buy Western Wear for Women comprising the premium material and elegant
        design that you are always seeking for. Basically,
      </p>
      <h2 className="h2">See More</h2>
      <h1 className="h1">
        <i className="fa-solid fa-minus"></i>Buy Women&apos;s Clothing at Best
        Price
      </h1>
      <div className="offer-container">
        <table className="custom-table">
          <tr>
            <td className="bold-text">Women&apos;s Clothing</td>
            <td className="bold-text">Best Price</td>
          </tr>

          <tr>
            <td>Pick Any 4 - Womens Plain T-shirt Combo</td>
            <td>₹1099</td>
          </tr>
          <tr>
            <td>Pick Any 4 - Plain Womens Boxer Combo</td>
            <td>₹1099</td>
          </tr>
          <tr>
            <td>Pick Any 4 Women Plain Full Sleeve T-shirt Combo</td>
            <td>₹1399</td>
          </tr>
          <tr>
            <td>Multicolor Checkered Long Casual Shirts for Women</td>
            <td>₹499</td>
          </tr>
          <tr>
            <td>Pick Any 2: Plain Boxy Casual Shirts for Women Combo</td>
            <td>₹799</td>
          </tr>
          <tr>
            <td>Blue Floral Anarkali Kurti</td>
            <td>₹599</td>
          </tr>
          <tr>
            <td>Jade Black Narrow Cut Flexible Women Jeggings</td>
            <td>₹998</td>
          </tr>
          <tr>
            <td>Mustard-yellow Solid Straight-Fit Women Pant</td>
            <td>₹499</td>
          </tr>
          <tr>
            <td>Women Pants Combo Pick Any 2</td>
            <td>₹800</td>
          </tr>
          <tr>
            <td>Pista Green Solid Boxy Casual Shirts for Women</td>
            <td>₹449</td>
          </tr>
          <tr>
            <td>Plain Burgundy Womens Boxer</td>
            <td>₹349</td>
          </tr>
          <tr>
            <td>Striped Front Tie Casual Shirts for Women</td>
            <td>₹449</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default ClothingFor
