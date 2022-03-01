import React from "react";
import Navbar from "../components/navbar/Navbar";
import LandingDiv from "../components/elements/LandingDiv";
import JobSearchDiv from "../components/elements/JobSearchDiv";

function MainPage() {
    return (
        <div className="App">
            <Navbar/>
            <LandingDiv/>
            <JobSearchDiv/>
        </div>
    )
}

export default MainPage;