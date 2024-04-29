import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobsListings from "../components/JobsListings";
import AllJobs from "../components/ViewAllJobs";

function MainPage() {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobsListings isHome={true} />
      <AllJobs />
    </>
  );
}

export default MainPage;
