import React, { useCallback, useState } from "react";
import "../../../Style/singup.css";
import Lottie from "lottie-react";
import "react-toastify/dist/ReactToastify.css";
import Stepper from "react-stepper-horizontal";
import FormButton from "../../Common/FormButton";
import me from "../../../assets/Je3eTqQJrt.json";
import "../../../Style/login.css";
import { Link, useNavigate } from "react-router-dom";
import useAPI from "../../../Hooks/USER/useAPI";
import TextBox from "../../../HOC/TextBox";
import { toast } from "react-toastify";
import Saved from "../../Common/Boxes";


const Step6 = ({ setScreen }) => {
    const api = useAPI();
    const navigate = useNavigate()

    const [skills, setSkills] = useState([]);
    const [profession, setProfession] = useState("");
    const [input, setInput] = useState([]);
    const [langauges, setLanguages] = useState([]);
    const [description, setDescription] = useState("");

    const handleEnterSkillsEvent = (e) => {
        if (e.key == "Enter") {
            setSkills([...skills, input]);
            e.target.value = "";
        }
    };

    const handleEnterLangaugeEvent = (e) => {
        if (e.key == "Enter") {
            setLanguages([...langauges, input]);
            e.target.value = "";
        }
    };

    const handleSubmit = useCallback(async () => {
        if (skills.length != 0 && profession && langauges.length != 0 && description) {
            const id = localStorage.getItem("upd_id");
            const data = await api.patchREQUEST("updateDetails", "users", id, { langauges, profession, skills, description });
            console.log(data);
            navigate("/loginasuser");
        }
        else {
            toast.error("Fill the form")
        }

    }, [
        profession, skills, langauges
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
                        <Stepper steps={[{}, {}, {}, {}, {}, {}]} activeStep={5} />
                        <span className="--sloganText">Give your Skills ,profession and langauge details.</span>
                        <span className="--waring"></span>
                    </div>
                    <div className="d-flex flex-column gap-2 do-res ">
                        <div className="d-flex flex-wrap  gap-3">
                            <Saved
                                array={skills}
                                setArray={setSkills}
                            />
                        </div>
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"Skills"}
                            handleChange={setInput}
                            handleKeyUpChange={handleEnterSkillsEvent}
                            required={true}
                            labelText={"Skills"}
                        />
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"Profession"}
                            onChange={setProfession}
                            required={true}
                            labelText={"Profession"}
                        />
                        <div className="d-flex flex-wrap  gap-3">
                            <Saved
                                array={langauges}
                                setArray={setLanguages}
                            />
                        </div>
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"Languages"}
                            handleKeyUpChange={handleEnterLangaugeEvent}
                            handleChange={setInput}
                            required={true}
                            labelText={"Languages"}
                        />
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"Description"}
                            onChange={setDescription}
                            required={true}
                            labelText={"Description"}
                        />
                        <div className="d-flex gap-2">
                            <FormButton
                                className={"--btn"}
                                text={"back"}
                                onClick={() => setScreen("step5")}
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

export default Step6;
