import "./noPage.scss"
import ErrorImg from "./../../assets/img/error.png"
import ErrorContent from "../../Components/error"

const NoPage = () => {
  return (
    <>
      <div className="no-page">
        <div className="container">
          <div className="img-wrapper">
            <img src={ErrorImg} alt="no-page" />
          </div>
          <ErrorContent />
        </div>
      </div>
    </>
  )
}

export default NoPage
