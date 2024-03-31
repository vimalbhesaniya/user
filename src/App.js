import React  from "react";
import { useState } from "react";
import { Route, BrowserRouter, Routes, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./componants/Common/Home";
import Signup from "./componants/signup/Signup";
import Jobs from "./componants/Common/Jobs";
import NotFound from "./componants/Common/Notfound";
import Nearbyusers from "./componants/Common/nearbyusers";
import Profile from "./componants/Common/profile";
import JobsList from "./UserSide/JobsList";
import Postajob from "./componants/Common/postajob";
import SearchSection from "./componants/Common/SearchSection";
import SavedJobsPage from "./componants/Common/SavedJobsPage";
import { ToastContainer, Slide } from "react-toastify";
import ListUsers from "./UserSide/ListUsers";
import LoginAsUser from "./UserSide/LoginAsUser";

const App = () => {
    return (
        <>

            <BrowserRouter>
                <ToastContainer
                    style={{ zIndex: "10000000000000000000003333333330" }}
                    position="bottom-left"
                    autoClose={2000}
                    className="upp"
                    limit={1}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                    transition={Slide}
                />
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/saved" element={<Nearbyusers />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/postajob" element={<Postajob />} />
                        <Route path="/network" element={<ListUsers />} />
                        <Route path="/saved" element={<SavedJobsPage />} />
                        <Route path="/search" element={<SearchSection />} />
                        <Route path={"/jobs/:id"} element={<Jobs />} />
                        <Route path={"/jobs"} element={<JobsList />} />
                    </Route>
                    <Route path={"/loginasuser"} element={<LoginAsUser />} />
                    <Route path={"/signup"} element={<Signup />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default App;
