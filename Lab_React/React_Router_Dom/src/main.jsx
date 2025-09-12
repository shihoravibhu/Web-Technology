import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import About from "./Components/About";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Lab 12 Introduction to ReactJS */}

    {/* 1. Implement Routing in ReactJS. (A)
 2. Develop basic website using 5 different component (pages) and implement Routing in it. 
(i.e. About, Contact etc…) (A)
 3. Develop full static website using 15 different component (pages) and implement Routing 
in it. (i.e. About, Contact etc…) (C) */}

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>

  </StrictMode>
);
