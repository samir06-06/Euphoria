import { useTranslation } from 'react-i18next'
import './style.scss'
function FooterLink() {
    const { t } = useTranslation()
    return (
        <div className="links">
            <div className="linkCol">
                <div className="head">
                    {t("need_help")}
                </div>
                <div className="link">{t("contact_us")}</div>
                <div className="link">{t("track_order")}</div>
                <div className="link">{t("returns_refunds")}</div>
                <div className="link">{t("faqs")}</div>
                <div className="link">{t("career")}</div>
            </div>
            <div className="linkCol">
                <div className="head">
                    {t("company")}
                </div>
                <div className="link">{t("about_us")}</div>
                <div className="link">{t("euphoria_blog")}</div>
                <div className="link">{t("euphoriastan")}</div>
                <div className="link">{t("collaboration")}</div>
                <div className="link">{t("media")}</div>
            </div>

            <div className="linkCol">
                <div className="head">
                    {t("more_info")}
                </div>
                <div className="link">{t("terms_conditions")}</div>
                <div className="link">{t("privacy_policy")}</div>
                <div className="link">{t("shipping_policy")}</div>
                <div className="link">{t("sitemap")}</div>
            </div>
            <div className="linkCol">
                <div className="head">
                    {t("location")}
                </div>
                <div className="link">support@euphoria.in</div>
                <div className="link">{t("address")}</div>
            </div>


        </div>
    )
}

export default FooterLink