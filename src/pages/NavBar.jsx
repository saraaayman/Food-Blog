import React from "react";
import BGFood from "../assets/backGrounFood.jfif";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h1 style={{ color: "white", position: "relative", left: "30%" }}>
          Postes<span style={{ color: "orange" }}>-Food </span>{" "}
        </h1>
      </div>

      <div style={{ width: "30%" }}>
        <ul
          style={{
            color: "white",
            textDecoration: "none",
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            gap: "10%",
            position: "relative",
            right: "50%",
            top: "20%",
          }}
        >
          <li>
            <Link to="/postes" style={{ color: "white" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" style={{ color: "white" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/CountentUS" style={{ color: "white" }}>
              Contant-Us
            </Link>
          </li>

          {/* <li>
            <Link to="/SignIn" >
            <Button
          variant="outlined"
          style={{
            color: "white",
            borderColor: "orange",
            background: "orange",
            borderRadius: "50px",
            fontSize: "90%",
            
          }}
        >
          Sign In
        </Button>
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
