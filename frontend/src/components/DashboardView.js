import Navbar from "./navbar/navbar";
import Bell from "./bell/Bell";
import Toast from "./toast/Toast";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
export default function DashboardView(props) {
  return (
    <div className="App">
      <section className="flex justify-center h-screen max-h-screen">
        <Navbar></Navbar>
        <main className="flex-1 bg-slate-900 px-8 py-4 overflow-y-auto md:px-32">
          <nav className="float-right w-48">
            <ul className="flex justify-around items-center px-2 text-white">
              <li>
                <Bell></Bell>
              </li>
              <li className="rounded-xl overflow-hidden w-10 flex justify-center items-center flex-1 ">
                <div className="font-bold mx-5">Test Test</div>
                <img
                  className="w-10 h-10"
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                />
              </li>
            </ul>
          </nav>
          <section className="my-10">
            <Outlet />
            <Routes>
              <Route path="/jobs" element={<h1>test</h1>}></Route>
              <Route path="/candidates" element={<h1>candidates</h1>}></Route>
              <Route path="/settings" element={<h1>settings</h1>}></Route>
            </Routes>
          </section>
        </main>
      </section>

      <Toast></Toast>
    </div>
  );
}
