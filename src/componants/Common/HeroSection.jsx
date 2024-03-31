import React from "react";
import svg1 from "../../assets/undraw_job_hunt_re_q203.svg";

const HeroSection = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="animate__animated animate__fadeInDown col-lg-6  p-5 d-flex justify-content-center  align-items-start flex-column  animate__delay-1s">
                        <div className="row">
                            <div
                                style={{ width: "fit-content" }}
                                className="gap-2  d-flex align-items-center bg-body-secondary  p-3 "
                            >
                                <span className="badge bg-info text-white ">
                                    New
                                </span>
                                <span>Stay connected to get upcoming jobs</span>
                            </div>
                            <div className=""></div>
                        </div>
                        <h1 className="">
                            Find the most exciting jobs in India
                        </h1>
                        <p></p>
                    </div>
                    <div className="col-lg-6 animate__animated animate__fadeInRight animate__delay-1s">
                        <img src={svg1} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
