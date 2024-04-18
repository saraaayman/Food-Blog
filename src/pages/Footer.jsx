import React from "react";
import bgOfferBurger from "../assets/bgOfferBurger.jpg"

const Footer = () => {
  return (
    <div>
      <img style={{ width: "100%" }} src={bgOfferBurger} alt="" srcset="" />

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ color: "gray" }}>
          <h3 style={{ color: "orange" }}>Order Online</h3>
          <p>Apptizer</p>
          <p>Burger</p>
          <p>Pizza</p>
          <p>sides</p>
          <p>Desserts</p>
        </div>

        <div style={{ color: "gray" }}>
          <h3 style={{ color: "orange" }}>Navigate</h3>
          <p>Home</p>
          <p>About</p>
          <p>Contant Us</p>
        </div>

        <div style={{ color: "gray" }}>
          <h3 style={{ color: "orange" }}>Opening Hours</h3>
          <p>
            Sat - <span style={{ color: "orange" }}>10Am - 11Pm</span>{" "}
          </p>
          <p>
            Sun - <span style={{ color: "orange" }}>10Am - 11Pm</span>{" "}
          </p>
          <p>
            Mon - <span style={{ color: "orange" }}>10Am - 11Pm</span>{" "}
          </p>
          <p>
            Tue - <span style={{ color: "orange" }}>10Am - 11Pm</span>{" "}
          </p>
          <p>
            Wed - <span style={{ color: "orange" }}>10Am - 11Pm</span>{" "}
          </p>
          <p>
            Thur - <span style={{ color: "orange" }}>10Am - 11Pm</span>{" "}
          </p>
          {/* <p>Fri - <span style={{color:"orange"}}>10Am - 11Pm</span> </p> */}
        </div>

        <div style={{ color: "gray" }}>
          <h3 style={{ color: "orange" }}>Order Online</h3>
          <p>Apptizer</p>
          <p>Burger</p>
          <p>Pizza</p>
          <p>sides</p>
          <p>Desserts</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
