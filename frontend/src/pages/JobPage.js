import React from "react";
import JobSearchDiv from "../components/elements/JobSearchDiv";
import { useNavigate } from "react-router-dom";
export default function JobPage(props) {
  const navigate = useNavigate();

  function addNewJob() {
    navigate("./newjob");
  }

  return (
    <div>
      {props.IsRecrutor == true ? (
        <button
          className="bg-blue-500 px-4 py-2 rounded-lg text-white"
          onClick={addNewJob}
        >
          Add job
        </button>
      ) : null}
      <JobSearchDiv />
    </div>
  );
}
