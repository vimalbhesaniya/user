import React, { useCallback, useMemo, useState } from "react";
import "../../../Style/singup.css";
import ProfessionBox from "../../Common/ProfessionBox";
import Lottie from "lottie-react";
import classes from "../../../Style/inputBoxs.module.css";
import "react-toastify/dist/ReactToastify.css";
import Stepper from "react-stepper-horizontal";
import FormButton from "../../Common/FormButton";
import me from "../../../assets/Je3eTqQJrt.json";
import FormContainer from "../../Common/FormContainer";
import "../../../Style/login.css";
import { Link, useNavigate } from "react-router-dom";
import { isValidStep6 } from "../../../Auth/isValidate";
import InputText from "../validateInputs";
import useAPI from "../../../Hooks/USER/useAPI";
import TextBox from "../../../HOC/TextBox";
import { toast } from "react-toastify";


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
        if(skills && profession && langauges && description)
        {
            const id = localStorage.getItem("upd_id");
            const data = await api.patchREQUEST("updateDetails", "users", id, { langauges, profession, skills, description });
            console.log(data);
            navigate("/loginasuser");
        }
        else{
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
                        <span className="--sloganText">Give yout Experience Details(you can skip this step)</span>
                        <span className="--waring"></span>
                    </div>
                    <div className="d-flex flex-column gap-2 do-res ">
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"Skills"}
                            onChange={setSkills}
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
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"Languages"}
                            onChange={setLanguages}
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
