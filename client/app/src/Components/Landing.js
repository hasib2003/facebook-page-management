
import "../App.css"
import { BsFacebook } from 'react-icons/bs';

const Landing = () => {
    return (
        <div className="landing">
            <div className="deliveryInfo">

                <div className="information">
                    <h2>
                        Do you want to add post to your facebook page remotely
                    </h2>
                    <h2>
                        Become a member by registering and enjoy remote access
                    </h2>
                </div>


                <div className="accessLinks">

                    <button className="btn" id="shopNow">
                    <a href="/signin" style={{"textDecoration":"none","color":"white"}}>Sign In</a>
                    </button>


                    <button className="btn" id="delivery">
                    <a href="/newuser" style={{"textDecoration":"none","color":"white"}}>Register Now</a>
                    </button>
                </div>
            </div>
            <div className="graphics">
                <BsFacebook style={{"color":"blue"}} size={350}/>
            </div>
        </div>

    )
}

export default Landing