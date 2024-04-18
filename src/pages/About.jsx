import React from "react";
import BGburger from "../assets/BGburger.jpg";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import burger from "../assets/burger.jpg";
import chicken from "../assets/chicken.jpg"
import bgOfferBurger from "../assets/bgOfferBurger.jpg"
import Footer from "./Footer";
const About = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${BGburger})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundPositionY: "110%",
          height: "95vh",
          marginBottom:"5%"
        }}
      >
        <NavBar />
        {/* <h1
          style={{
            color: "white",
            fontSize: "400%",
            display: "flex",
            justifyContent: "center",
            margin: "9%",
          }}
        >
          About
        </h1> */}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10%",
          // position:"relative",
          // left:"10%"
        }}
      >
        <div style={{ width: "50%", marginLeft: "100px" }}>
          <h2 style={{ color: "orange", width: "70%" }}>
            The Best Food For over 7 years
          </h2>

          <p style={{ color: "white" , width: "70%"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div style={{ width: "60%", textAlign: "center", margin: "0 auto" }}>
          <img style={{ width: "60%" }} src={burger} alt="" srcset="" />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10%",
          // position:"relative",
          // left:"10%"
        }}
      >
        <div style={{ width: "60%", textAlign: "center", margin: "0 auto" }}>
          <img style={{ width: "60%" }} src={chicken} alt="" srcset="" />
        </div>
        <div style={{ width: "50%", marginLeft: "100px" }}>
          <h2 style={{ color: "orange", width: "70%" }}>
            The Best Food For over 7 years
          </h2>

          <p style={{ color: "white", width: "70%" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10%",
          // position:"relative",
          // left:"10%"
        }}
      >
        <div style={{ width: "50%", marginLeft: "100px" }}>
          <h2 style={{ color: "orange", width: "70%" }}>
            The Best Food For over 7 years
          </h2>

          <p style={{ color: "white" , width: "70%"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div style={{ width: "60%", textAlign: "center", margin: "0 auto" }}>
          <img style={{ width: "60%" }} src={burger} alt="" srcset="" />
        </div>
      </div>
      <Footer/>
    </div>

    
  );
};

export default About;
