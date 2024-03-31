import React, { useMemo, useCallback, useState } from "react";
import "../../../Style/singup.css";
import Lottie from "lottie-react";
import "react-toastify/dist/ReactToastify.css";
import { Autocomplete } from '@lob/react-address-autocomplete'
import Stepper from "react-stepper-horizontal";
import FormButton from "../../Common/FormButton";
import FormSelectBox from "../../Common/FormSelectBox";
import me from "../../../assets/Je3eTqQJrt.json";
import { Link } from "react-router-dom";
import css from "../../../HOC/form.module.css"
import useAPI from "../../../Hooks/USER/useAPI";
import FormContainer from "../../Common/FormContainer";
import "../../../Style/login.css";
import InputText from "../validateInputs";
import { isValidStep3 } from "../../../Auth/isValidate";
import TextBox from "../../../HOC/TextBox";
import { toast } from "react-toastify";

const Step3 = ({ setScreen }) => {
    const [personalAddress, setPersonalAddress] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [stateValue, setStateValue] = useState("");

    const api = useAPI();

    const [state, setState] = useState("");
    const handleState = (stateValue) => {
        setStateValue(stateValue);
    };

    const [city, setCity] = useState("");
    const handleCity = (city) => {
        setCity(city);
    };


    const handleSubmit = useCallback(async () => {
        if (personalAddress , state , city , pinCode) {
            
            const id = localStorage.getItem("upd_id");
            const data = await api.patchREQUEST("updateDetails", "users", id, {
                location:
                [{ personalAddress, pinCode, state, city }]
            })
            setScreen("step4")
        }
        else{
            toast.error("Fill the form")
        }
    }, [stateValue, city, personalAddress, pinCode])


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
                        <Stepper steps={[{}, {}, {}, {}, {}, {}]} activeStep={2} />
                        <span className="--sloganText">Give your address details</span>
                        <span className="--waring"></span>
                    </div>
                    <div className="d-flex flex-column   gap-2">
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"Personal Address"}
                            onChange={setPersonalAddress}
                            required={true}
                            labelText={"Personal Address"}
                        />
                        <TextBox
                            Type={"text"}
                            PlaceHolder={"Pin code"}
                            onChange={setPinCode}
                            maxLength={6}
                            isText={true}
                            required={true}
                            labelText={"Pincode"}
                        />
                        <div className="d-flex gap-1 justify-content-center  align-items-center ">
                            <div>
                                <label className={css.label} htmlFor="">State</label>
                                <FormSelectBox
                                    type="text"
                                    className="--input"
                                    arrayKey="states"
                                    selectedState={stateValue}
                                    stateValue={handleState}
                                    selectedCity={city}
                                    state={setState}
                                    city={handleCity}
                                />
                            </div>
                            <div className="">
                                <label className={css.label} htmlFor="">City</label>
                                <FormSelectBox
                                    className={"--input"}
                                    arrayKey="cities"
                                    selectedState={stateValue}
                                    stateValue={handleState}
                                    selectedCity={city}
                                    state={setState}
                                    city={handleCity}
                                />
                            </div>

                        </div>


                        <div className="d-flex gap-2">
                            <FormButton
                                className={"--btn"}
                                text={"next"}
                                onClick={() => setScreen("step2")}
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

export default Step3