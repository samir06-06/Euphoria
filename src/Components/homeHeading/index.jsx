import './style.scss'
function Homeheading({ headText }) {
    return (
        <div className='Homeheading'>
            <div className="container" >
                <div className="line"></div>
                <div className="heading">{headText}</div>
            </div>
        </div>
    )
}

export default Homeheading