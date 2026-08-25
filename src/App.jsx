import React from "react";
import { Routes, Route } from "react-router-dom";

// import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
// import DisplayRow from "./components/DisplayRow/DisplayRow";
// import Footer from "./components/Footer/Footer";

function Home() {
  return (
    <>
      <Banner />
      {/* <DisplayRow /> */}
    </>
  );
}

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
