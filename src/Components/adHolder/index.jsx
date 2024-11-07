import './style.scss'
import Ad1 from '.././../assets/img/ad1.png'
import Ad2 from '.././../assets/img/ad2.png'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
function AdHolder() {
    const navigate = useNavigate()
    const { t } = useTranslation()
    return (
        <div className='AdHolder'>
            <div className="container">
                <div className="ad">
                    <div className="left"
                        style={{ backgroundImage: `url(${Ad1})` }}
                    >
                        <div className="head">
                            {t("ad_head")}
                        </div>
                        <div className="text">
                            {t("ad_sub")}
                        </div>
                        <button onClick={() => {
                            navigate('/productlist')
                        }}>
                            {t("shop_now")}
                        </button>
                    </div>
                    <div className="right"
                        style={{ backgroundImage: `url(${Ad2})` }}
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdHolder