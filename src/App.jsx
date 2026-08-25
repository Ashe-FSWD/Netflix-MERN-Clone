import React from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Banner />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
