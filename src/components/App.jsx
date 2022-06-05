import React from "react"
import MainPage from "../screens/MainPage";
import DetailPage from "../screens/DetailPage";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
