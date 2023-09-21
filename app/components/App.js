import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Root from "./root";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/home" element={<Root />} />
      </Routes>
    </div>
  );
};

export default App;
