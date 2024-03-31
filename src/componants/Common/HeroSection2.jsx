import React from "react";
import svg2 from "../../assets/apply.svg";
import svg3 from "../../assets/search.svg";
import svg4 from "../../assets/track.svg";
import svg5 from "../../assets/profile.svg";

const HeroSection2 = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 animate__animated animate__fadeInLeft animate__delay-1s">
                        <img src={svg2} alt="" className="img-fluid" />
                    </div>
                    <div className="animate__animated animate__fadeInDown col-lg-6  p-5 d-flex justify-content-center  align-items-start flex-column  animate__delay-1s">
                        <div className="row">
                            <div
                                style={{ width: "fit-content" }}
                                className="gap-2  d-flex align-items-center bg-body-secondary  p-3 "
                            >
                                <span className="badge bg-info text-white ">
                                    <i class="fa-solid fa-envelope-open-text"></i>
                                </span>
                                <span>Get Easy apply features</span>
                            </div>
                            <div className=""></div>
                        </div>
                        <h2>Easy Job Application</h2>
                        <p>Our job portal makes the job application process quick and straightforward. Here's how it works:</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="animate__animated animate__fadeInDown col-lg-6  p-5 d-flex justify-content-center  align-items-start flex-column  animate__delay-1s">
                        <div className="row">
                            <div
                                style={{ width: "fit-content" }}
                                className="gap-2  d-flex align-items-center bg-body-secondary  p-3 "
                            >
                                <span className="badge bg-info text-white ">
                                    <i className="fa fa-search"></i>
                                </span>
                                <span>Search your favourite jobs</span>
                            </div>
                            <div className=""></div>
                        </div>
                        <h3>Search and Discover</h3>
                        <p>Browse through thousands of job listings tailored to your skills, experience, and preferences.</p>
                    </div>
                    <div className="col-lg-6 animate__animated animate__fadeInLeft">
                        <img src={svg3} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 animate__animated animate__fadeInLeft animate__delay-2s">
                        <img src={svg4} alt="" className="img-fluid" />
                    </div>
                    <div className="animate__animated animate__fadeInDown col-lg-6  p-5 d-flex justify-content-center  align-items-start flex-column ">
                        <div className="row">
                            <div
                                style={{ width: "fit-content" }}
                                className="gap-2  d-flex align-items-center bg-body-secondary  p-3 "
                            >
                                <span className="badge bg-info text-white ">
                                    <i class="fa-solid fa-envelope"></i>
                                </span>
                                <span>Track your applied job with mail</span>
                            </div>
                            <div className=""></div>
                        </div>
                        <h3>Track Applications</h3>
                        <p>Keep track of all your job applications in one place and monitor their status effortlessly.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="animate__animated animate__fadeInDown col-lg-6  p-5 d-flex justify-content-center  align-items-start flex-column ">
                        <div className="row">
                            <div
                                style={{ width: "fit-content" }}
                                className="gap-2  d-flex align-items-center bg-body-secondary  p-3 "
                            >
                                <span className="badge bg-info text-white ">
                                    <i class="fa-solid fa-user"></i>
                                </span>
                                <span>Easy profile managing</span>
                            </div>
                            <div className=""></div>
                        </div>
                        <h3>Manage Your Profile</h3>
                        <p>Handling user profiles in a job portal typically involves allowing users to create, update, view, and manage their profiles. </p>
                    </div>
                    <div className="col-lg-6 animate__animated animate__fadeInLeft animate__delay-2s">
                        <img src={svg5} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection2;
