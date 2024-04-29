import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobsListings from "./components/JobsListings";
import AllJobs from "./components/ViewAllJobs";
import AddJob from "./pages/AddJobPage";
import NotFoundPage from "./pages/NotFoundPage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/MainPage";
import AllJobsPage from "./pages/AllJobsPage";
import JobDetails from "./pages/JobDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<MainPage />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/add-job" element={<AddJob />} />
      <Route path="/all-jobs" element={<AllJobsPage />} />
      <Route path="/job-details/:id" element={<JobDetails />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
