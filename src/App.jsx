
// //import { useState } from 'react'
// import { BrowserRouter } from "react-router-dom";
// //import Header from "./Components/Header/Header";
// //import Banner from "./Components/Banner/Banner";
// //import "./index.css";
// //import MovieCard from "./Components/MovieCard/MovieCard";
// import DisplayRow from "./components/DisplayRow/DisplayRow";
// //import Footer from "./Components/Footer/Footer";
// //import TestOne from "./Components/testOne/TestOne";
// //import TestTwo from "./Components/testOne/TestTwo";

// function App() {
//   return (
//     <BrowserRouter>
//       {/* <Header />
//       <Banner /> */}
//       {/* <MovieCard /> */}
//       <DisplayRow />
//       {/* <Footer /> */}
//     </BrowserRouter>
//   );
// }

// export default App;

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
