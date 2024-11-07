import React from "react";
import "./error.scss";
import { useNavigate } from "react-router-dom";

const ErrorContent = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="error-content">
       <div className="content">
       <h1>Oops! Page not found</h1>
        <p>
          The page you are looking for might have been removed or temporarily
          unavailable.
        </p>
       </div>
        <div className="back-btn">
            <button onClick={()=>{
              navigate("/")
            }}>
                Back to Homepage
            </button>
        </div>
      </div>
    </>
  );
};

export default ErrorContent;
