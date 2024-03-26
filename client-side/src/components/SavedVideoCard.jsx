import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'

const SavedVideoCard = ({videoId}) => {
    const {status} = useSelector((state)=>state.auth)
    const [video,setVideo] = useState({})
    const [channel,setChannel] = useState({})

    useEffect(()=>{
        (async () => {
            try {
                const videoRes = await axios.get(`https://youtube-1-i4hw.onrender.com/api/v1/videos/find/${videoId}`)
                const channelRes = await axios.get(`https://youtube-1-i4hw.onrender.com/api/v1/users/find/${videoRes.data.userId}`)
                setVideo(videoRes.data)
                setChannel(channelRes.data)
            } catch (error) {
                console.log(error)
            }
        })()
    },[videoId])
  return (
    <Link to={status?`/video/${video._id}`: "/login" } style={{textDecoration:"none"}}>
        <div  className="w-360 mb-45 cursor-pointer">
            <img className="w-full h-202 rounded-lg" src={video.thumbnail}/>
            <div className={`my-3 flex flex-wrap gap-2`}>
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

export default SavedVideoCard
