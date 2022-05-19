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
export default function DashboardView(props) {
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
                <div className="font-bold mx-5">Test Test</div>
                <img
                  className="w-10 h-10"
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                />
              </li>
            </ul>
          </nav>
          <section className="px-8 py-4 overflow-y-auto md:px-32 relative">
            <Outlet />
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/jobs" element={<h1>test</h1>}></Route>
            </Routes>
          </section>
        </main>
      </section>

      <Toast></Toast>
    </div>
  );
}
