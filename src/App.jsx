import React from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Banner />} />
      </Routes>
    </div>
  );
}

export default App;
