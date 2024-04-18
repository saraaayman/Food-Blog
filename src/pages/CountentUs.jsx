import React from "react";
import bgContent from "../assets/bgContent.jpg";
import photoContent from "../assets/content.jpg";

import StarIcon from "@mui/icons-material/Star";
import NavBar from "./NavBar";
import { Button, TextField } from "@mui/material";
import Footer from "./Footer";
const CountentUs = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgContent})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundPositionY: "20%",
          height: "100vh",
          marginBottom: "5%",
        }}
      >
        <NavBar />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "5%",
        }}
      >
        <div style={{ width: "20%" }}>
          <h2 style={{ color: "orange" }}>Get in touch</h2>
          <p style={{ color: "white" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div style={{ color: "white" }}>
          <StarIcon style={{ color: "orange", fontSize: "350%" }} />
          <h3>Addres</h3>
          <p>Damanhour street , 20th</p>
        </div>

        <div style={{ color: "white" }}>
          <StarIcon style={{ color: "orange", fontSize: "350%" }} />
          <h3>Call Us</h3>
          <p>12563 +15496</p>
        </div>

        <div style={{ color: "white" }}>
          <StarIcon style={{ color: "orange", fontSize: "350%" }} />
          <h3>Addres</h3>
          <p>Damanhour street , 20th</p>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <img src={photoContent} style={{ width: "100%", height: "100%" }} />
        </div>

        <div style={{}}>
          <h2
            style={{
              marginLeft: "10%",
              color: "orange",
              textAlign: "center",
              fontSize: "350% ",
            }}
          >
            Send Us Message{" "}
          </h2>
          <p
            style={{
              marginLeft: "10%",
              color: "white",
              textAlign: "center",
              fontSize: "200% ",
            }}
          >
            We're always hearing
          </p>

          <div style={{alignItems:"center"}}>
          <TextField
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "orange",
                color: "orange",
              },
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "orange",
                  color: "orange",
                },
              "& .MuiInputLabel-root": {
                color: "orange",
              },
            }}
            style={{ margin: "5% 10% ", width: "80%" }}
            inputProps={{ style: { color: "white" } }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />

          <TextField
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "orange",
                color: "orange",
              },
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "orange",
                  color: "orange",
                },
              "& .MuiInputLabel-root": {
                color: "orange",
              },
            }}
            style={{ margin: "5% 10%", width: "80%" }}
            inputProps={{ style: { color: "white" } }}
            id="outlined-basic"
            type="email"
            label="E-mail"
            variant="outlined"
          />

          <TextField
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "orange",
                color: "orange",
              },
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "orange",
                  color: "orange",
                },
              "& .MuiInputLabel-root": {
                color: "orange",
              },
            }}
            style={{ margin: "5% 10%", width: "80%" }}
            inputProps={{ style: { color: "white" } }}
            id="outlined-basic"
            label="Message"
            variant="outlined"
          />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              style={{
                width: "50%",
                color: "white",
                borderColor: "orange",
                background: "orange",
                borderRadius: "20px",
                fontSize: "110%",
              }}
            >
              Send Massage
            </Button>
          </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CountentUs;

{
  /*  */
}
