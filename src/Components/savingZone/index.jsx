import './style.scss'
import Homeheading from '../homeHeading'
import SavingUp from '../../assets/img/savingUp.png'
import SavingDown from '../../assets/img/savingDown.png'
import { IoArrowDown } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
function SavingZone() {
    const products = useSelector(state => state.products.products)
    let FemaleCount = 0
    let MaleCount = 0
    const navigate = useNavigate()
    const { t } = useTranslation()
    return (
        <div className='SavingZone'>
            <Homeheading headText={t("big_saving_zone")} />
            <div className="container">
                <div className="upper">
                    {products && products.map((elem, index) => {
                        if (elem.sale) {
                            if (elem.gender == 'Women') {
                                if (FemaleCount < 3) {
                                    FemaleCount++
                                    return <div className="card" style={{
                                        backgroundImage: `  linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${elem.img[1]})`
                                    }}>
                                        <div className="content">
                                            {
                                                elem.stock <= 40 && <button className='limited'>{t("limited_stock")}</button>
                                            }
                                            <div className="headTxt">{elem.name}</div>
                                            <div className="subTxt">{elem.description}</div>
                                            <div className="saleCount">{t("up_small")} {elem.sale}% {t("sale_small")}</div>
                                            <IoArrowDown className="arrow" size={40} />
                                            <button className='shop' onClick={() => {
                                                navigate('/products/' + elem.id)
                                            }}>{t("shop_now")}</button>
                                        </div>
                                    </div>
                                }
                            }
                        }
                    })}
                </div>
                <div className="lower">

                    {products && products.map((elem, index) => {
                        if (elem.sale) {
                            if (elem.gender == 'Men') {
                                if (MaleCount < 2) {
                                    MaleCount++
                                    return <div className="card" style={{
                                        backgroundImage: `  linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${elem.img[1]})`
                                    }}>
                                        <div className="content">
                                            {
                                                elem.stock <= 40 && <button className='limited'>{t("limited_stock")}</button>
                                            }                                            <div className="headTxt">{elem.name}</div>
                                            <div className="subTxt">{elem.description}</div>
                                            <div className="saleCount">{t("up_small")} {elem.sale}% {t("sale_small")}</div>
                                            <IoArrowDown className="arrow" size={40} />
                                            <button className='shop' onClick={() => {
                                                navigate('/products/' + elem.id)
                                            }}>{t("shop_now")}</button>
                                        </div>
                                    </div>
                                }
                            }
                        }
                    })}


                </div>
            </div>
        </div>
    )
}

export default SavingZone