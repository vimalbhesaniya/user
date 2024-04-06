import React, { useCallback, useState } from "react";
import "../../../Style/singup.css";
import Lottie from "lottie-react";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Stepper from "react-stepper-horizontal";
import FormButton from "../../Common/FormButton";
import me from "../../../assets/Je3eTqQJrt.json";
import "../../../Style/login.css";
import TextBox from "../../../HOC/TextBox";
import useAPI from "../../../Hooks/USER/useAPI";
import Saved from "../../Common/Boxes";

const Step4 = ({ setScreen }) => {

    const api = useAPI();

    const [institutionName, setInstitutionName] = useState("");
    const [input, setInput] = useState([]);
    const [degreeLevel, setDegreeLevel] = useState([]);
    const [startDateSchool, setStartDateSchool] = useState("no data");
    const [endDateSchool, setEndDateSchool] = useState("no data");
    const [gpa, setGpa] = useState("no data");
    const [certifications, setCertifications] = useState([]);
    const [univercity, setUnivercity] = useState("no data");
    const [school, setSchool] = useState("no data");

    const handleEnterDegreeEvent = (e) => {
        if (e.key == "Enter") {
            setDegreeLevel([...degreeLevel, input]);
            e.target.value = "";
        }
    };

    const handleEnterCertificationEvent = (e) => {
        if (e.key == "Enter") {
            setCertifications([...certifications, input]);
            e.target.value = "";
        }
    };

    const handleSubmit = useCallback(async () => {
        const id = localStorage.getItem("upd_id");
        const data = await api.patchREQUEST("updateDetails", "users", id, {
            education: [
                {
                    institutionName,
                    degreeLevel,
                    startDateSchool,
                    endDateSchool,
                    gpa,
                    certifications,
                    school,
                    univercity,
                },
            ],
        });
        console.log(data);
        setScreen("step5");
    }, [
        institutionName,
        degreeLevel,
        startDateSchool,
        endDateSchool,
        gpa,
        certifications,
        univercity,
        school,
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
                        <Stepper steps={[{}, {}, {}, {}, {}, {}]} activeStep={3} />
                        <span className="--sloganText">Give yout Education Details(you can skip this step)</span>
                        <span className="--waring"></span>
                    </div>
                    <div className="d-flex flex-column gap-2 do-res ">
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"institution name"}
                            onChange={setInstitutionName}
                            labelText={"Institution name"}
                        />
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"School"}
                            onChange={setSchool}
                            labelText={"School"}
                        />
                        <div className="d-flex  flex-wrap  gap-3">
                            <Saved
                                array={degreeLevel}
                                setArray={setDegreeLevel}
                            />
                        </div>
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"Degree level"}
                            handleKeyUpChange={handleEnterDegreeEvent}
                            handleChange={setInput}
                            labelText={"degree level(Press Enter)"}
                        />
                        <TextBox
                            Type={"date"}
                            PlaceHolder={"Start Date"}
                            onChange={setStartDateSchool}
                            labelText={"Start Date"}
                        />
                        <TextBox
                            Type={"date"}
                            PlaceHolder={"End Date"}
                            onChange={setEndDateSchool}
                            labelText={"End Date"}
                        />
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"GPA"}
                            required={true}
                            onChange={setGpa}
                            labelText={"GPA"}
                        />
                        <div className="d-flex flex-wrap  gap-3">
                            <Saved
                                array={certifications}
                                setArray={setCertifications}
                            />
                        </div>
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"Certifications"}
                            handleChange={setInput}
                            handleKeyUpChange={handleEnterCertificationEvent}
                            labelText={"Certifications(Press Enter)"}
                        />
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"University"}
                            onChange={setUnivercity}
                            labelText={"University"}
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

export default Step4;
