import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/http.js";
import {format} from "timeago.js"



export default function Card({video}){
    const [channel,setChannel] = useState({});
    const {status} = useSelector((state)=>state.auth)
    const [Loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const num = +(video.duration)
    useEffect(()=>{
        (async () => {
            setLoading(true)
            const res = await axios.get(`${BACKEND_URL}/users/find/${video.userId}`)
            setChannel(res.data)
            setLoading(false)
        })()
    },[video.userId])

    const handleCard = () => {
        navigate(status ? `/video/${video._id}`:"/login")
    }
    return (
        <>
       {
        Loading ? (<div className="text-white">Loading ....</div>) : (

            <div  onClick={handleCard} className="w-360 mb-45 cursor-pointer">
                <img className="w-full h-202 rounded-lg" src={video.thumbnail} alt=""/>
                <div className={`my-3 flex flex-wrap gap-2`}>
                    <img src={channel.avatar} alt="" className="w-9 h-9 border rounded-full bg-black" />
                    <p className="text-white">{video.title}</p>
                </div>
                <div className="text-white">
                    <p>{channel.username}</p>
                    <div className="flex gap-3">
                        <p>{video.views} views - {format(video.createdAt)}</p>
                        <p></p>
                    </div>     
                </div>
            </div>
        )
       }
       </>
    )
}