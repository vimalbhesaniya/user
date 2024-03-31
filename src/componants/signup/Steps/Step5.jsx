import React, { useCallback, useMemo, useState } from "react";
import "../../../Style/singup.css";
import Lottie from "lottie-react";
import classes from "../../../Style/inputBoxs.module.css";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Stepper from "react-stepper-horizontal";
import FormButton from "../../Common/FormButton";
import me from "../../../assets/Je3eTqQJrt.json";
import useAPI from "../../../Hooks/USER/useAPI";
import FormContainer from "../../Common/FormContainer";
import "../../../Style/login.css";
import InputText from "../validateInputs";
import { isValidStep5 } from "../../../Auth/isValidate";
import TextBox from "../../../HOC/TextBox";
import Saved from "../../Common/Boxes";

const Step5 = ({ setScreen }) => {
    const lottie = (
        <Lottie
            animationData={me}
            loop={true}
            style={{ height: "100%", width: "100%" }}
        />
    );

    const [jobTitle, setJobTitle] = useState("");
    const [userType, setUserType] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [startDateWork, setStartDateWork] = useState("");
    const [endDateWork, setEndDateWork] = useState("");
    const [responsibilities, setResponsibilities] = useState([]);
    const [achievements, setAchievements] = useState([]);
    const [isFresher, setIsFresher] = useState(false);
    const [input, setInput] = useState([]);
    
    const api = useAPI();
    
    const handleEnterResponsibilitesEvent = (e) => {
        if (e.key == "Enter") {
            setResponsibilities([...responsibilities, input])
             e.target.value = ""
        }
    }

    const handleEnterAchievementEvent =  (e) => {
        if (e.key == "Enter") {
            setAchievements([...achievements, input])
            e.target.value = "";
        }
    }


    const handleSubmit = useCallback(async () => {
        const id = localStorage.getItem("upd_id");
        const data = await api.patchREQUEST("updateDetails", "users", id, {
            experience: [
                {
                    isFresher,
                    jobTitle,
                    companyName,
                    userType,
                    startDateWork,
                    endDateWork,
                    responsibilities,
                    achievements,

                },
            ],
        });
        setScreen("step6");
    }, [
        jobTitle,
        companyName,
        startDateWork,
        userType,
        endDateWork,
        responsibilities,
        achievements,
    ]);

    return (
        <>
            <div className="--main">
                <div className="--left animate_animated animate__zoomIn">
                    <Lottie
                        animationData={me}
                        loop={true}
                        style={{ height: "100%", width: "100%" }}
                    />
                </div>
                <div className="--right">
                    <div className="--heading">
                        <span className="--headingText">Sign Up</span>
                        <Stepper steps={[{}, {}, {}, {}, {}, {}]} activeStep={4} />
                        <span className="--sloganText">Give yout Experience Details(you can skip this step)</span>
                        <span className="--waring"></span>
                    </div>
                    <div className="d-flex flex-column gap-2 do-res ">
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"Job Title"}
                            onChange={setJobTitle}
                            labelText={"Job Title"}
                        />
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"User Type"}
                            onChange={setUserType}
                            labelText={"User Type"}
                        />
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"Company Name"}
                            onChange={setCompanyName}
                            labelText={"Company Name"}
                        />
                        <TextBox
                            Type={"date"}
                            PlaceHolder={"Start Date"}
                            onChange={setStartDateWork}
                            labelText={"Start Date"}
                        />
                        <TextBox
                            Type={"date"}
                            PlaceHolder={"End Date"}
                            onChange={setEndDateWork}
                            labelText={"End Date"}
                        />
                        <div className="d-flex flex-wrap  gap-3">
                            <Saved
                                array={responsibilities}
                                setArray={setResponsibilities}
                            />
                        </div>
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"Responsibilities"}
                            handleKeyUpChange={handleEnterResponsibilitesEvent}
                            handleChange={setInput}
                            labelText={"Responsibilities"}
                        />
                        <div className="d-flex flex-wrap  gap-3">
                            <Saved
                                array={achievements}
                                setArray={setAchievements}
                            />
                        </div>
                        <TextBox
                            Type={"text"}
                            handleKeyUpChange={handleEnterAchievementEvent}
                            PlaceHolder={"Achievements"}
                            handleChange={setInput}
                            labelText={"Achievements"}
                        />
                        <div className="d-flex gap-2">
                            <FormButton
                                className={"--btn"}
                                text={"back"}
                                onClick={() => setScreen("step3")}
                            />
                            <FormButton
                                className={"--btn"}
                                text={"next"}
                                onClick={() => handleSubmit()}
                            />
                        </div>
                    </div>
                    <div className="signUpFooter">
                        <span>
                            <p className="--navLink">
                                Already have an account : <Link to={"/login"}>Login !</Link>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step5;
