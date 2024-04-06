import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../../../Style/singup.css";
import Lottie from "lottie-react";
import "react-toastify/dist/ReactToastify.css";
import Stepper from "react-stepper-horizontal";
import FormButton from "../../Common/FormButton";
import me from "../../../assets/Je3eTqQJrt.json";
import "../../../Style/login.css";
import useAPI from "../../../Hooks/USER/useAPI";
import { toast } from "react-toastify";
import TextBox from "../../../HOC/TextBox";

const Step1 = ({ setScreen }) => {

    const api = useAPI();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async () => {
        if (email, password, confirmPassword) {
            if (password === confirmPassword) {
                const response = await api.postREQUEST("addUser", JSON.stringify({ email, password }));
                localStorage.setItem("upd_id", response._id);
                if (response.success == false) {
                    toast.error("A user with this email already exists. Please log in using your existing account credentials.");
                }
                else {
                    setScreen("step2");
                }
            }
            else{
                toast.warn("Password dosn't match")
            }
        }
        else{
            toast.error("Fill the Form")
        }
    }
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
                        <Stepper steps={[{}, {}, {}, {}, {}, {}]} activeStep={0} />
                        <span className="--sloganText">Create your email and password</span>
                        <span className="--waring"></span>
                    </div>
                    <div className="d-flex flex-column  gap-2">
                        <TextBox
                            Type={"email"}
                            PlaceHolder={"Email"}
                            onChange={setEmail}
                            required={true}
                            labelText={"Email"}
                        />
                        <TextBox
                            Type={"password"}
                            PlaceHolder={"Password"}
                            onChange={setPassword}
                            required={true}
                            labelText={"Password"}
                             enablePassword={true}
                        />
                        <TextBox
                            Type={"password"}
                            PlaceHolder={"ConfirmPassword"}
                            onChange={setConfirmPassword}
                             enablePassword={true}
                            required={true}
                            labelText={"ConfirmPassword"}
                        />
                        <div className="d-flex gap-2">
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

export default Step1;
