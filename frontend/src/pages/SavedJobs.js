import JobCard from "../components/cards/JobCard";
import { useState } from "react";
export default function SavedJobs() {
  const [jobs, setJobs] = useState([]);
  if (localStorage.getItem("savedJobs") != null) {
    setJobs(JSON.parse(localStorage.getItem("savedJobs")));
  }
  function renderCards() {
    if (jobs.length > 0) {
      return jobs.map((job, index) => {
        return <JobCard job={job} key={index}></JobCard>;
      });
    } else {
      return <h3 className="text-lg text-white">No jobs saved!</h3>;
    }
  }

  return (
    <div>
      <h3 className="text-2xl  text-white">Saved jobs</h3>

      <section className="grid gap-4 my-5 grid-cols-1 grid-flow-row md:grid-cols-4 md:grid-rows-2 md:grid-flow-col-dense md:h-96 xl:grid-cols-6 ">
        {renderCards()}
      </section>
    </div>
  );
}
