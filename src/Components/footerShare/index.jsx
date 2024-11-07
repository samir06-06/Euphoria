import GooglePlayImg from '../../assets/img/googleplay.png'
import AppStoreImg from '../../assets/img/appstore.png'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import './style.scss'
import { useTranslation } from 'react-i18next'


function FooterShare() {
    const { t } = useTranslation()
    return (
        <div className="sharing">
            <div className="socials">
                <div className="icon">
                    <FaFacebookF size={18} color='#2A2F2F' />
                </div>
                <div className="icon">
                    <GrInstagram size={18} color='#2A2F2F' />
                </div>
                <div className="icon">
                    <FaTwitter size={18} color='#2A2F2F' />
                </div>
                <div className="icon">
                    <FaLinkedinIn size={18} color='#2A2F2F' />
                </div>
            </div>
            <div className="app">
                <div className="head">
                    {t("download_app")}
                </div>
                <div className="stores">
                    <img src={GooglePlayImg} alt="" />
                    <img src={AppStoreImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default FooterShare