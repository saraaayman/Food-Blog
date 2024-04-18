
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Postes from "./pages/Postes";
import About from "./pages/About";
import CountentUs from "./pages/CountentUs";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/Postes" element={<Postes/>} />
          <Route path="/AddPost" element={<AddPost/>} />
          <Route path="/EditPost/:id" element={<EditPost/>} />

          <Route path="/About" element={<About/>} />
          <Route path="/CountentUs" element={<CountentUs/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App; 
