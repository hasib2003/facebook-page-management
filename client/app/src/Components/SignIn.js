import "../SignIn.css"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const SignIn = () => {


  const [pass, setPass] = useState("")
  const [passHidden, setPassHidden] = useState(true)

  const [email,setEmail] = useState("")
  const navigate = useNavigate();
  const submitter = () => {
    try {
        axios.post("http://localhost:4000/api/user/authen",
            {
                 "email": email,
                "password": pass
            }
        ).then(
            (res) => {
              console.log(res.data)
                if (res.data["status"] === "allowed") {
                    navigate("/main")
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
    <div className="signIn formContainer">


      <h1>
        Sign In
      </h1>

      <form action="" className="form">
        <h4>
          Email
        </h4>
        <div className="input">


          <input type="email"
            placeholder='Enter the email '
            value={email}
            onChange = {(e)=>{setEmail(e.target.value)}}

            style={{ "fontSize": "1rem", "padding": "0rem 0.5rem" }} />
        </div>

        <h4>
          Password
        </h4>
        <div className="input pass">
          {
            passHidden ?

              <input placeholder='Enter the password '
                type="password" style={{ "fontSize": "1rem", "padding": "0rem 0.5rem" }} value={pass} onChange={(e) => {

                  setPass(e.target.value)

                }}
              /> :
              <input placeholder='Enter the password ' type="text" style={{ "fontSize": "1rem", "padding": "0rem 0.5rem" }} value={pass} onChange={(e) => {

                setPass(e.target.value)

              }}

              />

          }
          {
            passHidden ?

              <AiFillEye className="icon" size={25} onClick={() => { setPassHidden(false) }} /> :

              <AiFillEyeInvisible className="icon" size={25} onClick={() => { setPassHidden(true) }} />
          }
        </div>


        <div className="buttonWrapper">
          <button className="btn" onClick={(e)=>{
            e.preventDefault();
            email && pass ?
            submitter()
            :
            alert("Please fill all fields")
          }}>
            Sign In
          </button>
        </div>


      </form>
    </div>

  )
}

export default SignIn