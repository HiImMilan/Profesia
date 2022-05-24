import Navbar from "./navbar/navbar";
import Bell from "./bell/Bell";
import Toast from "./toast/Toast";
import DashboardPage from "../pages/DashboardPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function DashboardView(props) {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/login");
    }

    // get user info

    axios("http://127.0.0.1:8080/api/v1/info", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((response) => {
      if (response.status == 200) {
        setUserDetails(response.data);
      }
    });
  }, []);
  return (
    <div className="App">
      <section className="flex justify-center h-screen max-h-screen relative">
        <Navbar></Navbar>
        <main className="flex-1 bg-slate-900 flex flex-col">
          <nav className="flex bg-slate-800 justify-end py-2">
            <ul className="flex justify-center items-center px-2 text-white bg-slate-800">
              <li>
                <Bell></Bell>
              </li>
              <li className="rounded-xl flex justify-center items-center flex-1 ">
                <div className="font-bold mx-5">{userDetails.name}</div>
                <img className="w-10 h-10" src={userDetails.avatar} />
              </li>
            </ul>
          </nav>
          <section className="px-8 py-4 overflow-y-auto lg:px-32 relative">
            <Outlet />
            <Routes>
              {<Route path="/" element={<DashboardPage />} />}
              <Route path="/jobs" element={<h1>test</h1>}></Route>
            </Routes>
          </section>
        </main>
      </section>
    </div>
  );
}
