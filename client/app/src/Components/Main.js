
import "../App.css"
import { BsFacebook } from 'react-icons/bs';
import {useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Main = () => {
    const [img, setImg] = useState(false);
    const [vid, setVid] = useState(false);
    const [file, setFile] = useState("");
    // const navigate = useNavigate();
    const uploadToServer = async () => {
        if (img) {
            const formData = new FormData();
            formData.append("source", file)
            axios.post("https://graph.facebook.com/109633812045672/photos?",
                formData,
                {
                    headers:
                    {
                        "Content-Type": "multipart/form-data",
                        "Authorization": "Bearer EAAM1ZC2QCcWMBADiSfyZBa4FMrP92UVdc2rZAkX761OjOl8E4sD60b1WAYDoZB3RjjVN0v4wUr8AOy4vi49UQhrBmrzZA1YeF23sWUt4jpvIXJ2Guzw7YrleFxSOvZACKAMAc1ghqAlomlgzAshbtxbymoNvKnFg06d8c9CdDPW5gFRR2yr8hXEbihiiFHLU0ZD"
                    }
                }

            ).then(
                (res) => {
                    if (res.data["id"]) {
                        alert("Upload Successfully")
                    }
                }
            ).catch((err) => {
                alert("Error communicating to server")
                console.log(err)
            })
        }
        else if (vid) {
            // uploading the video require using not the global id rather the id that we see during the app management
            const formData = new FormData();
            formData.append("source", file)
            axios.post("https://graph.facebook.com/v16.0/109633812045672/videos?",
                formData,
                {
                    headers:
                    {
                        "Content-Type": "multipart/form-data",
                        "Authorization": "Bearer EAAM1ZC2QCcWMBADiSfyZBa4FMrP92UVdc2rZAkX761OjOl8E4sD60b1WAYDoZB3RjjVN0v4wUr8AOy4vi49UQhrBmrzZA1YeF23sWUt4jpvIXJ2Guzw7YrleFxSOvZACKAMAc1ghqAlomlgzAshbtxbymoNvKnFg06d8c9CdDPW5gFRR2yr8hXEbihiiFHLU0ZD"
                    }
                }
            ).then(
                (res) => {
                    if (res.data["id"]) {
                        alert("Upload Successfully")
                    }
                }
            ).catch((err) => {
                alert("Error communicating to server")
                console.log(err)
            })
        }

        setImg(false);
        setVid(false);
        setFile("");
    }

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    }

    
    return (
        <>
        
        <div className="landing">
            <div className="uploadBtns center">
                <h1 className="white">
                    Choose to upload
                </h1>
                {!img && !vid ?
                    <div className="options  ">
                        <button className="optionBtn btn"
                            onClick={() => { setImg(true) }}
                        >
                            Upload Picture
                        </button>
                        <button className="optionBtn btn"
                            onClick={() => { setVid(true) }}
                        >
                            Upload Video
                        </button>
                    </div> :
                    null}
                {img ?
                    <div className="upload">
                        <input className="btn" type="file" accept="image/png, image/jpeg"
                            onChange=
                            {
                                (e) => { handleChange(e) }
                            } />
                    </div> : null
                }
                {vid ?
                    <div className="upload">
                        <input className="btn" type="file" accept="video/mp4,video/x-m4v,video/*"
                            onChange=
                            {
                                (e) => { handleChange(e) }
                            }
                        />
                    </div> : null
                }
                {
                    file != "" ?
                        <button className="btn round" onClick={() => {
                            uploadToServer()
                        }}>
                            Upload
                        </button> : null
                }
            </div>
            <div className="graphics">
                <BsFacebook style={{ "color": "white" }} size={350} />
            </div>
        </div>
        </>
    )
}

export default Main