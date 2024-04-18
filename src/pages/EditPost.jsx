import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
const AddPost = () => {

  const [updateData,setUpdateData]=useState({
    image:"",
    title:"",
    description:"",
  })
  const {id} = useParams();
  const navigate = useNavigate();
  console.log(id);
  useEffect(() => {
    fetchDataToEdit();
  }, []); 

  const fetchDataToEdit= async()=>{
    try{
      const fetchData=await axios.get(`http://localhost:3000/postes/${id}`)
      setUpdateData(fetchData.data)
      console.log(fetchData.data.title);
      setUpdateData((prevData) => ({ ...prevData, image: fetchData.data.image }))

    }catch(error){
      toast.error("An error occurred while fetching the post data", error)
    }
  }
  const handleImage=(e)=>{
    const reader = new FileReader();
    reader.onload = () => {
      setUpdateData((updateData) => ({ ...updateData, image: reader.result }));
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  const handleTitle=(e)=>{
    setUpdateData((updateData)=>({...updateData,title:e.target.value}))
  }
  const handleDescription=(e)=>{
    setUpdateData((updateData)=>({...updateData,description:e.target.value}))
  }
  console.log(updateData)

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUpdateData({ ...updateData, [name]: value });
  // };

  const handleUpdatePost = async () => {
    try {
      await axios.put(`http://localhost:3000/postes/${id}`, updateData);
      toast.success("Post updated successfully!");
      navigate("/Postes"); // Redirect to home page after successful update
    } catch (error) {
      toast.error("An error occurred while updating the post:", error);
    }
  };

  const handleCancel=()=>{
    navigate("/Postes")
  }
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
          Edit A Post
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10vh",
            marginLeft: "30vh",
            gap:"4%",
            width:"73%",
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
            type="file"
            // label="Image"
            variant="outlined"
            onChange={handleImage}
            value={updateData.image.name}
            // onChange={handleInputChange}
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

            value={updateData.title}
            // onChange={handleInputChange}
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
            label="descrptipn"
            variant="outlined"
            onChange={handleDescription}
            value={updateData.description}
            // onChange={handleInputChange}
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
            onClick={handleUpdatePost}
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
            Update Post
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
