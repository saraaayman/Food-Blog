import { Button, TextField } from "@mui/material";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import Login from "../assets/Login.png";
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const navigate = useNavigate();

  console.log(formData);
  const handleEmail = (e) => {
    setFormData((formData) => ({ ...formData, Email: e.target.value }));
  };
  const handlePassword = (e) => {
    setFormData((formData) => ({ ...formData, Password: e.target.value }));
  };

  const getData = async () => {
    try {
      const fetchData = await axios.get("http://localhost:3000/userData");
      const userData = fetchData.data;
      if (
        userData<=0
      ) {
        return toast.error("not found email or password")
      }

      const user = userData.find(
        (user) =>
          user.email.toLowerCase() === formData.Email.toLowerCase() &&
          user.password === formData.Password
      );



      if(user ){
        toast.success("login scssec")
        console.log("user found :" ,user);
        navigate("/Postes");
      } else {
        toast.error("Invalid email or password");
      }

      console.log(fetchData);
    } catch (error) {
      toast.error("An error occurred while fetching user data");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        borderRadius: "15px",
        alignItems: "center",
        marginTop: "15vh",
        marginLeft: "30vh",
        gap: "70px",
        boxShadow: "-5px -5px 10px 0px rgba(255,158,64,0.4)",
        width: "75%",
        // opacity:"70%"
      }}
    >
      <div style={{ marginLeft: "20%" }}>
        <p style={{ fontSize: "30px", color: "orange" }}>Welcome Again </p>

        <TextField
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "orange",
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "orange",
            },
            "& .MuiInputLabel-root": {
              color: "orange",
            },
          }}
          style={{ marginBottom: "5%" }}
          inputProps={{ style: { color: "white" } }}
          id="outlined-basic"
          label="E-mail"
          type="email"
          variant="outlined"
          onChange={handleEmail}
        />
        <TextField
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "orange",
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "orange",
            },
            "& .MuiInputLabel-root": {
              color: "orange",
            },
          }}
          style={{ marginBottom: "5%" }}
          inputProps={{ style: { color: "white" } }}
          id="outlined-basic"
          label="Password"
          type="Password"
          variant="outlined"
          onChange={handlePassword}
        />

        <Button
          variant="outlined"
          onClick={getData}
          style={{
            display: "flex",
            width: "50%",
            color: "white",
            background: "orange",
            borderColor: "orange",
            borderRadius: "20px",
            fontSize: "110%",
            position: "relative",
            left: "14%",
          }}
        >
          Sign In
        </Button>
        <p style={{ color: "orange", fontSize: "110%", marginLeft: "4%" }}>
          Don't have an account
          <span>
            <Link
              to="/"
              style={{ color: "white", marginLeft: "4px", direction: "none" }}
            >
              Sign-Up
            </Link>
          </span>
        </p>
      </div>
      <div>
        <img
          src={Login}
          style={{ width: "500px", height: "500px", borderRadius: "15px" }}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
