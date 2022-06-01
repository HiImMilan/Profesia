import React from "react";
import JobSearchDiv from "../components/elements/JobSearchDiv";
import { useNavigate } from "react-router-dom";
export default function JobPage(props) {
  const navigate = useNavigate();
  console.log(props);
  function addNewJob() {
    navigate("./newjob");
  }

  return (
    <div>
      {props.recrutor === true ? (
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
