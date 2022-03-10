import React from "react";
import Navbar from "../components/navbar/Navbar";
import LandingDiv from "../components/elements/LandingDiv";
import JobSearchDiv from "../components/elements/JobSearchDiv";

function LoginRegisterPage() {
    return (
        <div className="App">
            <Navbar/>
            <LandingDiv/>
            <JobSearchDiv/>
        </div>
    )
}

export default LoginRegisterPage;