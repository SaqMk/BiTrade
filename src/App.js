import React from "react";
import Homepage from "./HomePage/Homepage";
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
export default function App() {

  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="about" element={<AboutUs />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
