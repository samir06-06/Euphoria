import './style.scss'
import Offer1 from '../../assets/img/Breezy Summer Style.png'
import Offer2 from '../../assets/img/High coziness.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchOffers } from '../../redux/slice/OfferSlice'

function Offers() {
    const offers = useSelector(state => state.offers.offers)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchOffers())
    }, [])

    return (
        <div className='Offers'>
            <div className="container">
                {
                    offers && offers.map(elem => (
                        // <img src={Offer1} alt="" key={elem.img} />
                        <img src={elem.img} alt="" key={elem.img} />

                    ))
                }
            </div>
        </div>
    )
}

export default Offers