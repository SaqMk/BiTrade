import React from "react";
import Homepage from "./HomePage/Homepage";
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import ScrollTop from "./ScrollTop";
import Register from "./Register/Register";
import Login from "./Login/Login";
export default function App() { 

  return (
    <>
   <BrowserRouter>
   <ScrollTop/>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="about" element={<AboutUs />}/>
        <Route path="register" element={<Register />}/>
        <Route path="login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
