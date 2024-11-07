import { useTranslation } from 'react-i18next'
import './style.scss'
import { IoIosArrowDown } from 'react-icons/io'
function FooterPopular() {
    const { t } = useTranslation()
    return (
        <div className='FooterPopular'>
            <div className="text">{t("popular_categories")}</div>
            <IoIosArrowDown size={25} color='#F6F6F6' />
        </div>
    )
}

export default FooterPopular