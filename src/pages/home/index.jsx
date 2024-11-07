import { useTranslation } from "react-i18next"
import AdHolder from "../../Components/adHolder"
import Categories from "../../Components/categories"
import Deals from "../../Components/deals"
import Feedback from "../../Components/feedback"
import Hero from "../../Components/hero"
import Limelight from "../../Components/limelight"
import NewArrival from "../../Components/newArrival"
import Offers from "../../Components/offers"
import SavingZone from "../../Components/savingZone"

export default function Home() {
  const { t } = useTranslation()
  return (
    <div style={{ width: "100%" }}>
      {/* <Navbar /> */}
      <div id="home">
        <Hero />
      </div>
      <Offers />
      <NewArrival />
      <SavingZone />

      <div id="ad">
        <AdHolder />
      </div>
      <div id="men">
        <Categories type={"men"} count={8} />
      </div>
      <div id="women">
        <Categories type={"women"} count={4} />
      </div>
      <div id="combos">
        <Deals />
      </div>
      <div id="joggers">
        <Limelight count={4} type={t("in_the_limelight")} />
      </div>
      <Feedback />
    </div>
  )
}
