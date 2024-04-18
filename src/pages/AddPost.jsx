import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
const AddPost = () => {
  const [addData, setAddData] = useState({
    image: "",
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  console.log(addData);
  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setAddData((addData) => ({ ...addData, image: reader.result }));
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleTitle = (e) => {
    setAddData((addData) => ({ ...addData, title: e.target.value }));
  };
  const handleDescription = (e) => {
    setAddData((addData) => ({ ...addData, description: e.target.value }));
  };
  // const testData = /^[a-zA-Z0-9]{3,30}$/;
  const testData = /^.{3,30}$/;


  const isValideData = () => {
    console.log("Title before validation:", addData.title);
    let res = true;
    if (addData.title === "" || !testData.test(addData.title)) {
      res = false;
      toast.error("Please enter a valid title");
      // console.log("Please enter a valid title")
    }
    console.log("Title after validation:", addData.title);
    if (addData.description === "" ) {
      res = false;
      toast.error("Please enter a valid description");
    }
    return res;
  };
  const handleAddPost = async () => {
    if (isValideData()) {
      try {
        const postData =await axios.post("http://localhost:3000/postes", addData);
        console.log(postData);
        // navigate("/Postes");
        if (postData.data) {
          toast.success("Post added successfully!");
          navigate("/Postes");
        } else {
          toast.error("Failed to add post. No data returned from server.");
        }
      } catch (error) {
        toast.error("An error occurred while adding the post:", error);
      }
    }
  };

  const handleCancel = () => {
    navigate("/Postes");
  };
  return (
    <>
      <div
        style={{ width: "60%", position: "relative", left: "15%", top: "11vh" }}
      >
        <div
          style={{
            border: "2px solid orange",
            display: "flex",
            justifyContent: "center",
            borderRadius: "20px",
            //   alignItems: "center",
            marginTop: "10vh",
            marginLeft: "30vh",
            //   gap: "70px",
            boxShadow: "-5px -5px 10px 0px rgba(255,158,64,0.4)",
            width: "70%",
            background: "orange",
            fontSize: "200%",
            padding: "1%",
          }}
        >
          Create a Post
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10vh",
            marginLeft: "30vh",
            gap: "4%",
            width: "73%",
            //   border:"2px solid orange"
          }}
        >
          <TextField
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "orange",
                // color: "orange",
              },
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "orange",
                  color: "orange",
                  boxShadow: "-5px -5px 10px 0px rgba(255,158,64,0.4)",
                },
              "& .MuiInputLabel-root": {
                color: "orange",
              },
            }}
            style={{ marginBottom: "5%", width: "40% " }}
            inputProps={{ style: { color: "white" } }}
            id="outlined-basic"
            // label="Image"
            type="file"
            variant="outlined"
            onChange={handleImage}
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
                  boxShadow: "-5px -5px 10px 0px rgba(255,158,64,0.4)",
                },
              "& .MuiInputLabel-root": {
                color: "orange",
              },
            }}
            style={{ marginBottom: "5%", width: "40% " }}
            inputProps={{ style: { color: "white" } }}
            id="outlined-basic"
            label="TiTle"
            variant="outlined"
            onChange={handleTitle}
          />
        </div>

        <div style={{ marginTop: "5vh", marginLeft: "30vh", width: "73%" }}>
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
                  boxShadow: "-5px -5px 10px 0px rgba(255,158,64,0.4)",
                },
              "& .MuiInputLabel-root": {
                color: "orange",
              },
            }}
            style={{ marginBottom: "5%", width: "100%" }}
            inputProps={{ style: { color: "white" } }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={handleDescription}
          />
        </div>

        <div
          style={{
            display: "flex",
            position: "relative",
            left: "23%",
            gap: "22%",
            marginTop: "7vh",
          }}
        >
          <Button
            variant="outlined"
            onClick={handleAddPost}
            style={{
              width: "25%",
              color: "black",
              background: "orange",
              borderRadius: "20px",
              fontSize: "120%",
              padding: "1%",
              border: "2px solid orange",
            }}
          >
            Add Post
          </Button>

          <Button
            variant="outlined"
            onClick={handleCancel}
            style={{
              width: "25%",
              color: "black",
              background: "orange",
              borderRadius: "20px",
              fontSize: "120%",
              padding: "1%",
              border: "2px solid orange",
            }}
          >
            cancel
          </Button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddPost;
