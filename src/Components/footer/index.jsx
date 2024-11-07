import { useTranslation } from 'react-i18next'
import FooterLink from '../footerLinks'
import FooterPopular from '../footerPopular'
import FooterShare from '../footerShare'
import './style.scss'
function FooterElem() {
    const { t } = useTranslation()
    return (
        <div className='Footer'>
            <div className="container">
                <FooterLink />
                <FooterShare />
                <FooterPopular />
                <div className="credits">
                    {t("copyright")}
                </div>
            </div>
        </div>
    )
}

export default FooterElem