import React from "react";
import CardItem from "./CardItem";
import NavBar from "./NavBar";
import BGFood from "../assets/backGrounFood.jfif";
import Footer from "./Footer";
import food from "../assets/food.jpg"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Postes = () => {
  return (
    <div>
      <div style={{backgroundImage: `url(${food})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '95vh'}}>
      <NavBar />
      <h2 style={{color:"#d59c46",position:"relative",left:"8%", top:"20%",fontSize:"250%" ,width:"35%" }}>Food WebSite To View Postes</h2>
      <div style={{position:"relative",left:"15%",top:"20%", width:"15%"}}>
      <Link to="/SignIn">
      <Button
          variant="outlined"
          style={{
            // display: "flex",
            width: "100%",
            color: "white",
            borderColor: "orange",
            background: "orange",

            borderRadius: "20px",
            fontSize: "110%",
            position:"relative",
            left:"20%",
            top:"5%",
          }}
        >
          Sign In
        </Button>
      </Link>
      </div>
      </div>
      <CardItem />
      <Footer/>
    </div>
  );
};

export default Postes;
