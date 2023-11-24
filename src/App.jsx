import React from "react";

import Home from "./pages/Home";

import { Routes, Route, Outlet } from "react-router-dom";
// import { Login } from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      {/* <Route path="/Login" element={<Login />} /> */}
    </Routes>
  );
}

export default App;
