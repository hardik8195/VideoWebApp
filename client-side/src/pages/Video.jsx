import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Button from '../components/Button';
import Recommendation from '../components/Recommendation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setVideo } from '../store/videoSlice';
export default function Video() {
    const path = useLocation().pathname.split("/")[2]

    const {video} = useSelector((state)=>state.video)
    const dispatch = useDispatch()
    const [channel,setChannel] = useState({})

    useEffect(()=>{
        (async ()=> {
            try {
                const videoRes = await axios.get(`/api/v1/videos/find/${path}`)
                const channelRes = await axios.get(`/api/v1/users/find/${videoRes.data.userId}`)
                dispatch(setVideo(videoRes.data))
                setChannel(channelRes.data)
            } catch (error) {
                console.log(error)
            }
        })()
    },[path,dispatch])
    return (
        <div className="flex gap-5">
            <div className="flex-5">
                <iframe
                    src={video.videoFile}
                    frameborder="0"
                    allowfullscreen
                    width="100%"
                    height="550"
                />
                <div className="text-white">
                    <h1>{video.title}</h1>
                    <div className="flex">
                        <div className="flex-1">
                            <p>7000 views . 22 june</p>
                        </div>
                        <div className="flex gap-3">
                            <div className='flex gap-1' >
                                <ThumbUpIcon />
                                <p>Like</p>
                            </div>
                            <div className='flex gap-1' >
                                <ThumbDownIcon />
                                <p>Dislike</p>
                            </div>
                        </div>
                    </div>
                    <hr className='my-4' />
                    <div className='flex my-3'>
                        <div className='flex gap-2 flex-1'>
                            <img src={channel.avatar} className="w-9 h-9 border rounded-full bg-black" />
                            <div>
                                <h1 style={{ fontSize: 'large' }}>{channel.username}</h1>
                                <p style={{ fontSize: 'small' }}>150k subcribers</p>
                                <p>g elit. Sed do eiusmod tempor incididunt ut labore</p>
                            </div>
                        </div>
                        <div>
                            <Button>SUBCRIBE</Button>
                        </div>
                    </div>
                    <div className='flex my-3'>
                        <div className='gap-2 flex-1'>
                            <input
                                className='w-10/12 h-20 border rounded-md p-2'
                                placeholder='Add a comment ...'
                            />
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button>ADD</Button>
                <div className='flex my-3 text-white'>
                        <div className='flex gap-2 flex-1'>
                            <img className="w-9 h-9 border rounded-full bg-black" />
                            <div>
                                <h1 style={{ fontSize: 'medium' }}>John Doe</h1>
                                <p style={{ fontSize: 'small' }}>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex my-3 text-white'>
                        <div className='flex gap-2 flex-1'>
                            <img className="w-9 h-9 border rounded-full bg-black" />
                            <div>
                                <h1 style={{ fontSize: 'medium' }}>John Doe</h1>
                                <p style={{ fontSize: 'small' }}>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex my-3 text-white'>
                        <div className='flex gap-2 flex-1'>
                            <img className="w-9 h-9 border rounded-full bg-black" />
                            <div>
                                <h1 style={{ fontSize: 'medium' }}>John Doe</h1>
                                <p style={{ fontSize: 'small' }}>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex my-3 text-white'>
                        <div className='flex gap-2 flex-1'>
                            <img className="w-9 h-9 border rounded-full bg-black" />
                            <div>
                                <h1 style={{ fontSize: 'medium' }}>John Doe</h1>
                                <p style={{ fontSize: 'small' }}>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex my-3 text-white'>
                        <div className='flex gap-2 flex-1'>
                            <img className="w-9 h-9 border rounded-full bg-black" />
                            <div>
                                <h1 style={{ fontSize: 'medium' }}>John Doe</h1>
                                <p style={{ fontSize: 'small' }}>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex my-3 text-white'>
                        <div className='flex gap-2 flex-1'>
                            <img className="w-9 h-9 border rounded-full bg-black" />
                            <div>
                                <h1 style={{ fontSize: 'medium' }}>John Doe</h1>
                                <p style={{ fontSize: 'small' }}>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex my-3 text-white'>
                        <div className='flex gap-2 flex-1'>
                            <img className="w-9 h-9 border rounded-full bg-black" />
                            <div>
                                <h1 style={{ fontSize: 'medium' }}>John Doe</h1>
                                <p style={{ fontSize: 'small' }}>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="flex-2">
                <Recommendation />
            </div>

        </div>
    )
}