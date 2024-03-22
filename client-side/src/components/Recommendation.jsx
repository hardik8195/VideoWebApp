import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const Recommendation = () => {
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        (async()=>{
            try {
                const res = await axios.get("/api/v1/videos/random")
                setVideos(res.data)
            } catch (error) {
                console.log(error)
            }
        })()
    },[])
    return (
        <>
            {
                videos.map((video)=>(
                    <Card key={video._id} video={video}/>
                ))
            }
        </>


        
    )
}

export default Recommendation
