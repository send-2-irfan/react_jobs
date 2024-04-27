import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobsListings from "../components/JobsListings";
import AllJobs from "../components/ViewAllJobs";

function MainPage() {
  const home = true;
  return (
    <>
      <Hero />
      <HomeCards />
      <JobsListings home={home} />
      <AllJobs />
    </>
  );
}

export default MainPage;
