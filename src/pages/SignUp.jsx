import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

import Signup from "../assets/Signup.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const SignUp = () => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleUserName = (e) => {
    setData((data) => ({ ...data, userName: e.target.value }));
  };

  const handleEmail = (e) => {
    setData((data) => ({ ...data, email: e.target.value }));
  };

  const handlePassword = (e) => {
    setData((data) => ({ ...data, password: e.target.value }));
  };
  console.log(data);

  const regUserName = /^[a-zA-Z_-]{3,16}$/;
  const regXemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.com$/;
  const regXpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const isValidation = () => {
    let resIsValidation = true;
    if (!regUserName.test(data.userName)) {
      toast.error("must be enter string name");
      resIsValidation = false;
    }

    if (!regXemail.test(data.email)) {
      toast.error("must be enter Example123@gmail.com");
      resIsValidation = false;
    }

    if (!regXpassword.test(data.password)) {
      toast.error(
        "must be enter Contains at least one lowercase letter , Contains at least one uppercase letter ,Contains at least one digit,Is at least 8 characters long."
      );
      resIsValidation = false;
    }

    return resIsValidation;
  };

  const PostData = async() => {
    if (!isValidation()) {
      return isValidation;
    }
    
//////////////////////////////////////////////////////////////Post Data true //////////////////////////////////
    try {
      const axiosData =await axios.post("http://localhost:3000/userData", data);
      console.log(axiosData);
      navigate("/Postes")
    } catch (error) {
      toast.error("not found");
    }



    // try {
    //   const response = await axios.get(`http://localhost:3000/userData/${data.email}`);
    //   if (response.data.exists) {
    //     alert("Email already exists. Please use a different email address.");
    //     return;
    //   }
    // } catch (error) {
    //   console.error("Error checking email:", error);
    //   return;
    // }

    // // If email doesn't exist, proceed with sign up
    // try {
    //   const signUpResponse = await axios.post("http://localhost:3000/userData", data);
    //   console.log("Sign up successful:", signUpResponse.data);
    //   // Redirect user or show success message
    // } catch (error) {
    //   console.error("Error signing up:", error);
    //   // Handle error (e.g., display error message to user)
    // }

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
      }}
    >
      <div style={{ marginLeft: "20%" }}>
        <p style={{ fontSize: "30px", color: "orange" }}>Create An Account</p>

        <TextField
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "orange",
              color: "orange",
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "orange",
              color: "orange",
            },
            "& .MuiInputLabel-root": {
              color: "orange",
            },
          }}
          style={{ marginBottom: "5%" }}
          inputProps={{ style: { color: "white" } }}
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          onChange={handleUserName}
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
          onClick={PostData}
          style={{
            display: "flex",
            width: "50%",
            color: "white",
            borderColor: "orange",
            background: "orange",

            borderRadius: "20px",
            fontSize: "110%",
            position: "relative",
            left: "15%",
          }}
        >
          Sign Up
        </Button>
        <p style={{ color: "orange", fontSize: "110%", marginLeft: "4%" }}>
          I have an account
          <span>
            <Link
              to="/SignIn"
              style={{ color: "white", marginLeft: "4px", direction: "none" }}
            >
              Sign-In
            </Link>
          </span>
        </p>
      </div>
      <div>
        <img
          src={Signup}
          style={{ width: "500px", height: "500px", borderRadius: "15px" }}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
