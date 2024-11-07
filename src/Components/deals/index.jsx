import './style.scss'
import Brand from '../../assets/img/brand.png'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

function Deals() {
    const { t } = useTranslation()
    const products = useSelector(state => state.products.products)
    return (
        <div className='Deals'>
            <div className="container">
                <div className="slice">

                    <div className="head">{t("top_brands_deal")}</div>
                    <div className="text">
                        {t("up_to")} <span className="yellow">60%</span> {t("off_on_brands")}
                    </div>
                    <div className="logos">
                        {
                            products && products.map(elem => (
                                (elem.sale > 20) &&
                                <div className="logo">
                                    {/* <img src={Brand} alt="" /> */}
                                    <h1>{elem.brand}</h1>
                                </div>



                            )
                            )
                        }
                        {/* <div className="logo">
                            <img src={Brand} alt="" />
                        </div>
                        <div className="logo">
                            <img src={Brand} alt="" />
                        </div>
                        <div className="logo">
                            <img src={Brand} alt="" />
                        </div>
                        <div className="logo">
                            <img src={Brand} alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deals