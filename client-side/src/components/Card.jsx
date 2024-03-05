import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

export default function Card({video}){
    const [channel,setChannel] = useState({});
    useEffect(()=>{
        (async () => {
            const res = await axios.get(`/api/v1/users/find/${video.userId}`)
            setChannel(res.data)
        })()
    },[video.userId])
    return (
        <Link to="/video/test" style={{textDecoration:"none"}}>
        <div className="w-360 mb-45 cursor-pointer">
            <img className="w-full h-202" src={video.thumbnail}/>
            <div className="my-3 flex gap-2">
                <img src={channel.avatar} className="w-9 h-9 border rounded-full bg-black" />
                <p className="text-white">{video.title}</p>
            </div>
            <div className="text-white">
                <p>{channel.username}</p>
                <div className="flex gap-3">
                    <p>{video.views} views -</p>
                    <p>{format(video.createdAt)}</p>
                </div>
                
                
            </div>
        </div>
        </Link>
    )
}