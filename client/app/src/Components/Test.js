import { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
const Test = () => {


    const [pageToken ,setToken] = useState("")
    const componentClicked = (data) => {
        console.log("data -> ", data)
    }

    const responseFacebook = (response) => 
    {

        console.log("tar -> ",response.accessToken)
        
        axios.get(`https://graph.facebook.com/v16.0/oauth/access_token?grant_type=fb_exchange_token&client_id=903795940946275&client_secret=9e37589ef4829542eb5525bec7381928&fb_exchange_token=${response.accessToken}`).then(
            (res)=>{
                    console.log("long lived access token ",res.data["access_token"])


                    axios.get(`https://graph.facebook.com/v16.0/me?access_token=${res.data["access_token"]}`).then(
                        (res2)=>{
                            console.log("current user id", res2.data["id"])


                            // getting the page access token for this user

                            axios.get(`https://graph.facebook.com/v16.0/${res2.data["id"]}/accounts?access_token=${res.data["access_token"]}`).then(
                                (res3)=>{
                                    console.log("final response ", res3.data["data"][0]["access_token"])
                                    setToken( res3.data["data"][0]["access_token"])

                                }
                            ).catch((err3)=>{console.log(err3)})
                            
                        }
                    ).catch((err2)=>
                    {
                        console.log(err2)
                    })

                    
            }
        ).catch((err)=>{console.log(err)})


    }
    return (
        <div>
            <h3>Facebook Login </h3>
            <FacebookLogin
                appId="903795940946275"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
            />,
        </div>
    )
}

export default Test