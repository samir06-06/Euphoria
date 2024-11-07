import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { setDescCategory } from '../../redux/slice/interface'
import Homeheading from '../homeHeading'
import './style.scss'
function DetailDescription({ product }) {
    const descCategory = useSelector((state) => state.interface.descCategory)
    const dispatch = useDispatch()
    const { t } = useTranslation()
    return (
        <div className='DetailDescription'>
            <Homeheading headText={t("detail_desc")} />
            <div className="content">
                <div className="left">
                    <div className="heading">
                        <button className={descCategory == 'description' ? "head active" : "head"} onClick={() => {
                            dispatch(setDescCategory('description'))
                            console.log('   dispatch(setDescCategory(')
                        }}>
                            {t("details")}
                            {
                                descCategory == 'description' &&
                                <div id="borderLeft"></div>}
                        </button>
                        <button className={descCategory == 'comments' ? "head active" : "head"} onClick={() => {
                            dispatch(setDescCategory('comments'))
                        }}>
                            {t("user_comments")}
                            <div className="count purple">  {product.comment && product.comment.length}</div>
                            {
                                descCategory == 'comments' &&
                                <div id="borderLeft"></div>}
                        </button>
                        <button className={descCategory == 'questions' ? "head active" : "head"} onClick={() => {
                            dispatch(setDescCategory('questions'))
                        }}>
                            {t("questions")}
                            <div className="count gray" >  {product.question && product.question.length}</div>
                            {
                                descCategory == 'questions' &&
                                <div id="borderLeft"></div>}
                        </button>
                    </div>
                    {
                        descCategory == 'description' && <div className="description">
                            {/* 100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints. */}
                            {product?.description}
                            <div className="details">
                                <div className="row upper">
                                    <div className="cell">
                                        <div className="type"> {t("fabric")}</div>
                                        <div className="name">{product.fabric}</div>
                                    </div>
                                    {/* <div className="line"></div> */}
                                    <div className="cell mid">
                                        <div className="type"> {t("pattern")}</div>
                                        <div className="name">{product.pattern}</div>
                                    </div>
                                    {/* <div className="line"></div> */}
                                    <div className="cell">
                                        <div className="type"> {t("fit")}</div>
                                        <div className="name">{product.fit}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="cell">
                                        <div className="type"> {t("neck")}</div>
                                        <div className="name">{product.neck}</div>
                                    </div>
                                    {/* <div className="line"></div> */}
                                    <div className="cell mid">
                                        <div className="type"> {t("sleeve")}</div>
                                        <div className="name">{product.sleeve}</div>
                                    </div>
                                    {/* <div className="line"></div> */}
                                    <div className="cell">
                                        <div className="type"> {t("style")}</div>
                                        <div className="name">{product.style}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        descCategory == 'comments' && <div className="comments">comments</div>
                    }
                    {
                        descCategory == 'questions' && <div className="questions">
                            questions
                        </div>
                    }

                </div>
                <div className="right">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zI_sjJY5aro?si=p-_Y5Bn7Ogx6vyKT&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default DetailDescription