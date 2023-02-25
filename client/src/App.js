import React from "react";
import { Routes, Route } from "react-router-dom";
import Alerterrors from "./components/auth/Alerterrors";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Index from "./components/common/cv/create/Index";
import EditCv from "./components/common/cv/edit/EditCv";
import Footer from "./components/common/footer/Footer";
import Navigation from "./components/common/header/Navigation";
import Home from "./components/Home/Home";
import Homepage from "./components/Home/homepage/Homepage";

function App() {
  
  return (
<div>
  
  <Navigation/>
  <Alerterrors />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/homepage/*" element={<Homepage />} />
  <Route path='/edit/:id' element={<EditCv/>} />
  <Route path="/index" element={<Index />} />
  <Route path="/login" element={<Login />} />
   <Route path="/register" element={<Register />} />
</Routes>
<Footer/>
</div>
    )
}

export default App