import React, { useContext, useEffect, useState } from "react";
import FormButton from "../componants/Common/FormButton";
import server from "../assets/server.json"
import me from "../assets/me.json";
import {toast } from "react-toastify";
import Cookies from "js-cookie";
import 'firebase/auth';
import TextBox from "../HOC/TextBox";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "lottie-react";
import NavbarBeforeLogin from "../componants/login/NavbarBeforeLogin";
import ResetPassword from "../componants/login/ResetPassword";
import { ActiveModal } from "..";
import useAPI from "../Hooks/USER/useAPI";

const LoginAsUser = () => {
    const api = useAPI();
    const navigate = useNavigate();
    useEffect(()=>{
        const token = Cookies.get("token");
        if(token){
            navigate("home");
        }
    } , [navigate])

  const [, setActiveModalState] = useContext(ActiveModal);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [, setErrorMessage] = useState("");
    const [close, setClose] = useState(false);
    const [serverError, ] = useState(false);

    const handleSubmit = async () => {
        if (email && password) {
            const RESPONSE = await api.postREQUEST("login", JSON.stringify({ email, password }));
            if (RESPONSE?.data) {
                const userId = RESPONSE.id
                await api.postREQUEST("userWhoPerformFollow", JSON.stringify({ userId }));
                await api.postREQUEST("userWhoPerformFollowToCompany", JSON.stringify({ userId }));
                Cookies.set("id", RESPONSE.id)
                Cookies.set("token", RESPONSE.token)
                localStorage.setItem("data", JSON.stringify(RESPONSE.data));
                toast.success("Login Successfully")
                navigate("/home");
            } else {
                toast.error(RESPONSE.error);
            }
        }
        else {
            setErrorMessage("Provide Email and Password");
        }
    }



    return (
        <>
            {close && <ResetPassword close={setClose} />}
            <NavbarBeforeLogin />
            <div className="--main">
                <div className="--left animate_animated animate__zoomIn">
                    <Lottie
                        animationData={serverError ? server : me}
                        loop={true}
                        style={{ height: "100%", width: "100%" }}
                    />
                </div>
                <div className="--right">
                    <div className="--heading">
                        <span className="--headingText">Sign In</span>
                        <span className="--sloganText">Unlock Your Opportunities.Explore with Login !</span>
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
                        enablePassword={true}
                        required={true}
                        labelText={"Password"}
                    />
                    <div className="d-flex gap-2">
                    <FormButton
                        className={"--btn"}
                        text={"Forgot Password"}
                        onClick={() => setClose(true)}
                    />
                    <FormButton
                        className={"--btn"}
                        text={"Login"}
                        onClick={() => handleSubmit()}
                    />
                    </div>
                    </div>
                    <div className="signUpFooter">
                        <span>
                            <p className="--navLink">
                                No account yet? Time to{" "}
                                <Link to={"/signup"}>Sign Up !</Link>
                            </p>
                        </span>
                        <div className="--flexCenter">
                            <span className="badge bg-primary-subtle hand text-primary  ">Privacy Policy</span>
                            <span onClick={() => { setActiveModalState("terms") }} className="badge bg-primary-subtle  hand text-primary  ">Terms and conditions</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginAsUser;
