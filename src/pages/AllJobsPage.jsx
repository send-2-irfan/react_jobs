import React, { useState } from "react";
import JobsListings from "../components/JobsListings";

function AllJobsPage() {
  const [job, setJob] = useState("");
  const handleInputChange = (e) => {
    setJob(e.target.value);
  };
  return (
    <>
      <section className="bg-blue-50 py-4">
        <div className="container mx-auto px-4">
          <div className="relative">
            <input
              value={job}
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Filter jobs..."
              onChange={handleInputChange}
            />
          </div>
        </div>
      </section>

      <JobsListings filter={job} />
    </>
  );
}

export default AllJobsPage;
