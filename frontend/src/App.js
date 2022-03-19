import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import "./App.css";

import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
        <Route path="/login" element={<LoginRegisterPage></LoginRegisterPage>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
