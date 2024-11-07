import React from "react";
import "./orders.scss";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Product4 from "./../../assets/img/product4.jpg";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate= useNavigate()
  return (
    <div className="orders-body">
      <div className="container">
        <div className="orders-heading">
          <h1>My Orders</h1>
        </div>
        <div className="orders-main-section">
          <Tabs aria-label="Basic tabs" defaultValue={0} className="tabs">
            <TabList className="tab-list">
              <Tab>Active</Tab>
              <Tab>Cancelled</Tab>
              <Tab>Completed</Tab>
            </TabList>
            <TabPanel value={0}>
              <div className="order-item">
                <div className="order-info-card">
                  <h3 className="order-no">Order no: <span>#49584977737</span></h3>
                  <div className="date-status">
                    <h5 className="date">
                      Order Date: <span>00384739208jdsakd</span>
                    </h5>
                    <h5 className="status">
                      Order Status: <span>Inprogress</span>
                    </h5>
                  </div>
                  <div className="deliveryDate-payment">
                    <h5 className="delivery-date">
                      Estimated Delivery Date: <span>8 June 2023</span>
                    </h5>
                    <h5 className="payment">
                      Payment Method: <span> Cash on delivery</span>
                    </h5>
                  </div>
                </div>
                <div className="ordered-item">
                  <div className="left-sect">
                    <div className="product-img">
                      <img src={Product4} alt="" />
                    </div>
                    <div className="product-content">
                      <h3>Blue Flower Print Crop Top</h3>
                      <h3>
                        Color : <span className="product-color">Yellow</span>
                      </h3>
                      <h3>
                        Quantity : <span className="product-quantity">1</span>
                      </h3>
                    </div>
                  </div>
                  <div className="right-sect">
                    <div className="view-btn" >
                      <button onClick={() => {
                        console.log("clicked")
                                navigate('/products/')
                            }}>View detailed</button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={1}>
              <b>Second</b> tab panel
            </TabPanel>
            <TabPanel value={2}>
              <b>Third</b> tab panel
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Orders;
