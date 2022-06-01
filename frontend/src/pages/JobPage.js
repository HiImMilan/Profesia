import React from "react";
import JobSearchDiv from "../components/elements/JobSearchDiv";
import { useNavigate } from "react-router-dom";
export default function JobPage() {
  const navigate = useNavigate();

  function addNewJob() {
    navigate("./newjob");
  }

  return (
    <div>
      <button
        className="bg-blue-500 px-4 py-2 rounded-lg text-white"
        onClick={addNewJob}
      >
        Add job
      </button>
      <JobSearchDiv />
    </div>
  );
}
