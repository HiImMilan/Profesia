import Navbar from "./navbar/navbar";
import Bell from "./bell/Bell";
import DashboardPage from "../pages/DashboardPage";
import JobPage from "../pages/JobPage";
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
import { useToast } from "./toast/ToastContext";
import NewJobForm from "./forms/createJobForm";
import Popper from "@mui/material/Popper";
import SettingsPage from "../pages/SettingsPage";
import { ImCross } from "react-icons/im";
export default function DashboardView(props) {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const toast = useToast();

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/login");
    }

    const tokenForm = new FormData();
    tokenForm.append("token", localStorage.getItem("token"));

    axios
      .post("http://127.0.0.1:8080/api/v1/validate", tokenForm)
      .then((res) => {
        if (res.data !== true) {
          navigate("/login");
          localStorage.removeItem("token");
          toast.addToast("Error", "Session expired");
        }
      });
    // get user info

    axios("http://127.0.0.1:8080/api/users/info", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((response) => {
      if (response.status == 200) {
        setUserDetails(response.data);
      }
    });
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <div className="App">
      <section className="flex justify-center h-screen max-h-screen relative">
        <Navbar open={[mobileNav, setMobileNav]}></Navbar>
        <main className="flex-1 bg-slate-900 flex flex-col">
          <nav className="flex bg-slate-800 justify-end py-2">
            <button
              className="text-3xl text-white mr-auto mx-5 outline-none border-none nav-button"
              onClick={() => {
                setMobileNav(!mobileNav);
              }}
            >
              W
            </button>
            <ul className="flex justify-center items-center px-2 text-white bg-slate-800">
              <li>
                <Bell></Bell>
              </li>
              <Popper id={id} open={open} anchorEl={anchorEl}>
                <div class="bg-white ml-10 p-2 rounded-sm">
                  <button onClick={logout}>Logout</button>
                </div>
              </Popper>
              <li className="rounded-xl flex justify-center items-center flex-1 mx-5">
                <button onClick={handleClick}>
                  <span className="font-bold mx-5">{userDetails.name}</span>
                  <img
                    className="w-10 h-10 inline-block"
                    src={userDetails.avatar}
                    alt="Avatar icon"
                  />
                </button>
              </li>
            </ul>
          </nav>
          <section className="p-8 overflow-y-auto lg:p-16 relative">
            <Outlet />
            <Routes>
              {<Route path="/" element={<DashboardPage />} />}
              <Route path="/jobs/newjob" element={<NewJobForm />}></Route>
              <Route path="/jobs" element={<JobPage />}></Route>
              <Route path="/settings" element={<SettingsPage />}></Route>
            </Routes>
          </section>
        </main>
      </section>
    </div>
  );
}
