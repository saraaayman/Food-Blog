import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import sara from "../assets/sara.jpg";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

// import SvgDelete from "../../SVG/SvgDelete";

const CardItem = () => {
  const [postes, setPostes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPostes();
  }, []);

  const getPostes = async () => {
    try {
      const fetchPostes = await axios.get("http://localhost:3000/postes");
      setPostes(fetchPostes.data);
      console.log(fetchPostes);
    } catch (error) {
      toast.error("An error occurred while fetching user data");
    }
  };

  const handleDelete = async (postId) => {
    const res = window.confirm("Are you sure Delete this post");
    if (res === true) {
      try {
        await axios.delete(`http://localhost:3000/postes/${postId}`);
        const deletePost = postes.filter((post) => post.id !== postId);
        setPostes(deletePost);
        toast.success("Item deleted successfully!");
      } catch (error) {
        toast.error("An error occurred while deleting the item");
      }
    }

    // axios
    //   .delete(`http://localhost:3000/postes/${postId}`)
    //   .then(() => {
    //     setPostes(postes.filter((post) => post.id !== postId));
    //     toast.success("Item deleted successfully!");
    //   })
    //   .catch((error) => {
    //     toast.error("An error occurred while deleting the item");
    //   });
  };

  const handleEditPost=(postId)=>{
    navigate(`/EditPost/${postId}`)
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "2%",
          marginLeft: "5%",
          marginRight: "9%",
        }}
      >
        <div
          style={{ background: "orange", borderRadius: "10%" }}
        >
          <h1>Postes : {postes.length}</h1>
        </div>
        <Link to="/AddPost">
          <AddCircleIcon style={{ color: "orange", fontSize: "445%" }} />
        </Link>
        
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly",flexWrap: "wrap" }}>
      {postes.map((post) => (
      <div  key={post.id} >
          <Card
            sx={{ maxWidth: 400 }}
            style={{ marginTop: "5%" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "orange",
                borderRadius: "5%",
              }}
            >
              <img
                src={sara}
                style={{ borderRadius: "100%", width: "6%", height: "6%" }}
              />
              {/* <p>Sara ayman</p> */}
              <div style={{ display: "flex", gap: "5%" }}>
                <DeleteIcon
                  onClick={() => handleDelete(post.id)}
                  style={{ height: "100%" }}
                />
                <EditIcon onClick={()=>handleEditPost(post.id)} style={{ height: "100%" }} />
              </div>
            </div>
            <CardMedia
              style={{ width: "100%" }}
              sx={{ height: 190 }}
              image={post.image}
              title="Pizza"
            />
            <CardContent style={{ background: "orange" }}>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.description}
              </Typography>
            </CardContent>
            {/* <CardActions>
          <Button size="small">Delete </Button>
          <Button size="small"></Button>
        </CardActions> */}
          </Card>

          <ToastContainer />
      </div>
        ))}
      </div>
    </>
  );
};

export default CardItem;
