import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

const Recommendation = () => {
    const [videos,setVideos] = useState([])

    const {video} = useSelector((state)=>state.video)
    const fetchVideos = videos.filter((Video)=>Video._id !== video._id)
    useEffect(()=>{
        (async()=>{
            try {
                const res = await axios.get("https://youtube-1-i4hw.onrender.com/api/v1/videos/random")
                setVideos(res.data)
            } catch (error) {
                console.log(error)
            }
        })()
    },[])
    return (
        <>
            {
                fetchVideos.map((fetchVideo)=>(
                    <Card key={fetchVideo._id} video={fetchVideo}/>
                ))
            }
        </>


        
    )
}

export default Recommendation
