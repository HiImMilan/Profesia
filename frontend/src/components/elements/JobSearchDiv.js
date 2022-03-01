import { React, useState, useEffect } from "react";
import JobCard from "../cards/JobCard.js";

let JobSearchDiv = () => {
  const [jobs, setJobs] = useState([]);

  // API call to get jobs
 /*  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:8080/jobs/all", {
        crossDomain: true,
      });
      const json = await result.json();
      setJobs(json);
    };
    fetchData();
  },[jobs]); */

  return (
    <div class="w-full bg-white p-12 dark:bg-gray-900">
      <div class="header flex items-end justify-between mb-12">
        <div class="title">
          <p class="text-3xl font-bold text-white mb-4">Lastest job offers</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12">
        {jobs.map((job) => (
          <JobCard {...job} />
        ))}
      </div>
    </div>
  );
};

export default JobSearchDiv;
