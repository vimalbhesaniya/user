import React, { useCallback, useEffect, useMemo, useState } from "react";
import "../../../Style/singup.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import "react-toastify/dist/ReactToastify.css";
import css from "../../../HOC/form.module.css"
import Stepper from "react-stepper-horizontal";
import useAPI from "../../../Hooks/USER/useAPI";
import FormButton from "../../Common/FormButton";
import me from "../../../assets/Je3eTqQJrt.json";
import "../../../Style/login.css";
import ProfilePreview from "./profilePreview";
import useFirestorage from "../../../Hooks/OTHER/useFirestorage";
import TextBox from "../../../HOC/TextBox";
import { toast } from "react-toastify";

const Step2 = ({ setScreen }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [profileImage, setprofileImage] = useState("");

    const upload = useFirestorage();
    const api = useAPI();
    const url = upload.imageUrl

    const handleFileChange = useCallback(async (event) => {
        const isConfirmed = window.confirm("Are you sure?")
        if (isConfirmed) {
            const file = event.target.files[0];
            var fileType = file.type;
            if (fileType.startsWith('image/')) {
                await upload.Upload(event.target.files[0], "userprofiles/");
            } else {
                toast.error("This file is not valid");
            }
        }
    }, []);

    useEffect(() => {
        setprofileImage(url);
    }, [url])

    const handleSubmit = useCallback(async () => {
        if (firstName, lastName, profileImage) {
            const id = localStorage.getItem("upd_id");
            const data = await api.patchREQUEST("updateDetails", "users", { _id: id }, { firstName, lastName, profileImage })
            setScreen("step3")
        }
        else {
            toast.error("Fill the Form");
        }
    }, [firstName, lastName, profileImage])

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
                        <Stepper steps={[{}, {}, {}, {}, {}, {}]} activeStep={1} />
                        <span className="--sloganText">Hello there! We believe every story begins with a name. Mind sharing your first and last name with us? We're excited to get to know you better!</span>
                        <span className="--waring"></span>
                    </div>
                    <div className="d-flex flex-column   gap-2">
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"First Name"}
                            onChange={setFirstName}
                            required={true}
                            isNumber={true}
                            labelText={"First Name"}
                        />

                        <TextBox
                            Type={"text"}
                            PlaceHolder={"Last Name"}
                            isNumber={true}
                            onChange={setLastName}
                            required={true}
                            labelText={"Last Name"}
                        />
                        <div className="d-flex gap-1 justify-content-center  align-items-center ">
                            <div>
                                <label className={css.label} htmlFor="">Profile Picture</label>
                                <input
                                    className={css.input}
                                    type="file"
                                    accept="image"
                                    onChange={(e) => { handleFileChange(e) }}
                                />
                            </div>
                            <div className="d-flex justify-content-center  align-items-center ">
                                <ProfilePreview image={profileImage && profileImage} />
                            </div>

                        </div>
                        <div className="d-flex gap-2">
                        <FormButton
                                className={"--btn"}
                                text={"back"}
                                onClick={() => setScreen("step1")}
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
    )
}

export default Step2