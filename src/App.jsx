import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
