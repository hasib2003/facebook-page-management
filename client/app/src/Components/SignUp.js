import { useState } from "react"
import { BiArrowBack } from 'react-icons/bi';
import "../SignIn.css"
import "../SignUp.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState(true);
    const [bioData, setBio] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [password, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [emailVal, setEmailVal] = useState("");


    const submitter = () => {
        try {
            axios.post("http://localhost:4000/api/user/add",
                {
                    "firstName": firstName,
                    "lastName": LastName,
                    "email": emailVal,
                    "password": password
                }
            ).then(
                (res) => {
                    if (res.data["status"] === "allowed") {
                        alert("Sucessfully registered")
                        navigate("/signin")
                    }
                    else {
                        alert(res.data["message"])
                    }
                }
            )
        }
        catch (err) {
            alert("Error while communicating to serve")
        }
    }


    return (
        <div className="signUp formContainer">

            <h1>
                Sign Up and Enjoy
            </h1>

            {email ?

                <form action="" className="form email">
                    <h4>
                        Email
                    </h4>
                    <div className="input" id="emailInput">


                        <input type="email"
                            value={emailVal}
                            onChange={(e) => { setEmailVal(e.target.value) }}
                            placeholder='Enter the email '
                            style={{ "fontSize": "1rem", "padding": "0rem 0.5rem" }} />
                    </div>
                    <div className="buttonWrapper rflex">
                        <button className="btn" onClick={
                            (e) => {

                                if (emailVal !== "") {


                                    setEmail(false)
                                    setBio(true)
                                }
                                else {
                                    e.preventDefault();
                                    alert("please fill out all form")
                                }
                            }
                        }>
                            Next
                        </button>
                    </div>
                </form>
                : null

            }

            {!email && bioData ?


                <form action="" className="form bioData" >

                    <h4>
                        First Name
                    </h4>
                    <div className="input">


                        <input type="text"
                            placeholder='your legal first name '

                            style={{ "fontSize": "1rem", "padding": "0.4rem 0.5rem" }}

                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value) }}
                        />
                    </div>

                    <h4>
                        Last Name
                    </h4>
                    <div className="input">


                        <input type="text"
                            placeholder='your legal last name '
                            value={LastName}
                            onChange={
                                (e) => { setLastName(e.target.value) }
                            }
                            style={{ "fontSize": "1rem", "padding": "0.4rem 0.5rem" }} />
                    </div>

                    <h4>
                        Password
                    </h4>
                    <div className="input pass">
                        <input placeholder='Enter the password '

                            type="password" style={{ "fontSize": "1rem", "padding": "0.4rem 0.5rem" }} value={password} onChange={(e) => {

                                setPass(e.target.value)

                            }}
                        />
                    </div>
                    <h4>
                        Confirm Password
                    </h4>
                    <div className="input pass">
                        <input placeholder='Confirm the password '

                            type="password" style={{ "fontSize": "1rem", "padding": "0.4rem 0.5rem" }} value={confirmPass} onChange={(e) => {

                                setConfirmPass(e.target.value)

                            }}
                        />
                    </div>


                    <div className="buttonWrapper rflex">

                        <BiArrowBack className="icons hoverRound" size={25}
                            style={{ "color": "white" }} s
                            onClick={
                                () => {
                                    setEmail(true)
                                    setBio(false)
                                }
                            }

                        />


                        {(confirmPass) === (password) !== "" ?
                            <button className="btn width"

                                onClick={(e) => {

                                    if (emailVal !== "" && firstName !== "" && LastName !== "" && password !== "" && password === confirmPass) {

                                        e.preventDefault();
                                        submitter();
                                        // setEmail(false)
                                        // setBio(true)

                                    }
                                    else {
                                        e.preventDefault();
                                        alert("please fill out all form")
                                    }
                                }
                                }

                            >
                                Sign Up
                            </button> :
                            <button className="btn width" style={{ "pointerEvents": "none" }}>
                                Sign Up
                            </button>
                        }
                    </div>


                </form>

                : null

            }



        </div>
    )
}

export default SignUp