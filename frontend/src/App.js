import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
