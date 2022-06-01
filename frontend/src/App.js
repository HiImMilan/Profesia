import { React, useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import RegisterForm from "./components/forms/registerForm";
import "./App.css";
import UploadFileForm from "./components/forms/uploadFileForm";
import DashboardView from "./components/DashboardView";
import { ToastProvider } from "./components/toast/ToastContext";

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/debug"
            element={<UploadFileForm></UploadFileForm>}
          ></Route>
          <Route
            path="/login"
            element={<LoginRegisterPage></LoginRegisterPage>}
          ></Route>
          <Route
            path="/dashboard/*"
            element={<DashboardView></DashboardView>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
