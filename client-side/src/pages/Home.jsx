import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import conf from "../conf/conf.js";


export default function Home({type}){
    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        (async () => {
            const res = await axios.get("https://youtube-1-i4hw.onrender.com/api/v1/videos/${type}")
            setVideos(res.data);
        })()
    },[type])
    return (
        <div className="flex flex-wrap justify-between p-6">
            {
                videos.map((video)=>(
                    <Card key={video._id} video={video} />
                ))
            }
        </div>
    )
}