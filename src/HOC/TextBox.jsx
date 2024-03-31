import React, { useCallback, useEffect, useState } from 'react'
import css from "./form.module.css"


const TextBox = ({
    Type,
    PlaceHolder, 
    onChange,
    iD,
    labelText,
    maxLength,
    enablePassword,
    accept,
    isText,
    isNumber,
    name,
    handleKeyUpChange,
    required,
    handleChange = () => {}  
}) => {
    const [warning, setWarning] = useState()
    const [password, setPassword] = useState(enablePassword)
    const [type, setType] = useState(Type)

    const handleInput = useCallback((e) => {
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let target = e.target.value
        if (type == "email") {
            if (target == '' && required) {
                setWarning("You must have to fill this field")
                onChange(null)
            }
            else {
                if (!target.match(regexEmail)) {
                    setWarning("Enter valid Email Address")
                    onChange&&onChange(null)
                }
                else {
                    setWarning("")
                    onChange&&onChange(target)
                }
            }
        }
        //password 
        if (type == "password") {
            if (target == '' && required) {
                setWarning("You must have to fill this field")
                onChange(null)
            }
            else {
                let target = e.target.value
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                if (!target.match(passwordRegex)) {
                    setWarning("Password must include one upper/lowercase, digit,special char, min 8 chars.")
                    onChange&&onChange(null)
                }
                else {
                    onChange&&onChange(target)
                    setWarning("")
                }
            }
        }

        if (type == "text") {
            if (target == '' && required) {
                setWarning("You must have to fill this field")
            }
            else {
                setWarning("")
                onChange&&onChange(target)
            }
        }

        if (type == "date") {
            if (target == '' && required) {
                setWarning("You must have to fill this field")
            }
            else {
                setWarning("")
                onChange&&onChange(target)
            }
        }
        
        const textRegex = /^[^\d]+$/;
        if (isNumber) {
            if (!target.match(textRegex)) {
                setWarning("Please enter a valid text without numbers.")
                onChange&&onChange(null);
            }
            else {
                onChange&&onChange(target)
                setWarning("")
            }
        }
        const numberRegex = /^-?\d*\.?\d+$/;
        if (isText) {
            if (!target.match(numberRegex)) {
                setWarning("Please enter a valid Number without text.")
                onChange&&onChange(null);
            }
            else {
                onChange&&onChange(target)
                setWarning("")
            }
        }

    }, [])


    const handlePassword = useCallback(() => {
        if (type == "password") {
            setType((prev) => {
                if (prev == type) {
                    setType("text")
                }
                else {
                    setType("password")
                }
            })

        }
    }, [])

    return (
        <>
            <div className={css.inputBox}>
                <div className={css.inputDiv}>
                    <label htmlFor="" className={css.label}>{labelText}</label>
                    <input
                        type={type}
                        onBlur={handleInput}
                        className={warning ? `${css.input} ${css.warn}` : css.input}
                        placeholder={PlaceHolder}
                        id={iD}
                        name={name}
                        maxLength={maxLength}
                        accept={accept}
                        required={required}
                        onKeyUp={handleKeyUpChange}
                        onChange={(e)=>handleChange(e.target.value)}
                    />
                    {password && <span className={css.password} onClick={handlePassword}>
                        <i className={type === 'password' ? `fa fa-eye hand` : `fa fa-eye-slash hand`}>
                        </i>
                    </span>}
                </div>
                <span className={css.warning}>{warning}</span>
            </div>
        </>
    )
}

export default TextBox