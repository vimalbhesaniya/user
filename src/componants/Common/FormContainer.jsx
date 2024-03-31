import React, { useContext } from "react";
import Lottie from "lottie-react";
import { ToastContainer } from "react-toastify";
import me from "../../assets/me.json";
import FormTextboxes from "./FormTextbox";
import { Link } from "react-router-dom";
import FormButton from "./FormButton";
import { Stepper } from "react-form-stepper";
import "../../Style/login.css";
import { ActiveModal } from "../..";
import Saved from "./Boxes";
const FormContainer = ({
    footerSection,
    handleSubmit,
    warning,
    setEmail,
    setPassword,
    arrayValuesCetrification,
    title,
    setArrayValuesCertification,
    textbox1,
    textbox2,
    textbox3,
    textbox4,
    arrayValues,
    textbox5,
    textbox6,
    textbox7,
    textbox8,
    textbox9,
    textbox10,
    heading,
    InputS,
    slogan,
    navigat,
    button1,
    button2,
    leftSection,
    setArray,
    setArrayResp,
    arrayValuesResp,
    setArrayAch,
    arrayValuesAch,
    arrayValuesSkill,
    arrayValuesLang,
    setArraySkill,
    setArrayLang,
}) => {
    const [activeModalState , setActiveModalState] = useContext(ActiveModal)
    return (
        <>
            <div className="--main">
                <div className="--left animate_animated animate__zoomIn">{leftSection}</div>
                <div className="--right">
                    <div className="--heading">
                        <span className="--headingText">{heading}</span>
                        <span className="--sloganText">{slogan}</span>
                        <span className="--titleText">{title}</span>
                        <span className="--waring">{warning}</span>
                    </div>
                    {InputS}
                    <div className="signUpFooter">
                        <span>{navigat}</span>
                        <div className="--flexCenter">
                        <span   className="badge bg-primary-subtle hand text-primary  ">Privacy Policy</span>
                        <span onClick={()=>{setActiveModalState("terms")}} className="badge bg-primary-subtle  hand text-primary  ">Terms and conditions</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormContainer;
