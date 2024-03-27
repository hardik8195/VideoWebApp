import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Button from '../components/Button';
import Recommendation from '../components/Recommendation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dislike, like, setVideo } from '../store/videoSlice';
import { format } from 'timeago.js';
import { savedVideos, subscription } from '../store/authSlice';
import Comments from '../components/Comments';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
export default function Video() {

    const path = useLocation().pathname.split("/")[2]
    const { video } = useSelector((state) => state.video)
    const { user } = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const [channel, setChannel] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const videoRes = await axios.get(`https://youtube-1-i4hw.onrender.com/api/v1/videos/find/${path}`)
                const channelRes = await axios.get(`https://youtube-1-i4hw.onrender.com/api/v1/users/find/${videoRes.data.userId}`)
                dispatch(setVideo(videoRes.data))
                setChannel(channelRes.data)

            } catch (error) {
                console.log(error)
            }
        })()
    }, [path, dispatch])

    const handleLike = async () => {
        await axios.put(`https://youtube-1-i4hw.onrender.com/api/v1/users/like/${video._id}`)
        dispatch(like(user.data.loggedInUser._id))
    }
    const handleDislike = async () => {
        await axios.put(`https://youtube-1-i4hw.onrender.com/api/v1/users/dislike/${video._id}`)
        dispatch(dislike(user.data.loggedInUser._id))
    }
    const handleSubscribe = async () => {
        user.data.loggedInUser.subscribedUsers.includes(channel._id) ?
            await axios.put(`https://youtube-1-i4hw.onrender.com/api/v1/users/unsub/${channel._id}`) :
            await axios.put(`https://youtube-1-i4hw.onrender.com/api/v1/users/sub/${channel._id}`)

        dispatch(subscription(channel._id))
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            await axios.delete(`https://youtube-1-i4hw.onrender.com/api/v1/videos/${video._id}`)
            setLoading(false)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    const handleLibary = async () => {
         user.data.loggedInUser.savedVideos.includes(video._id) ? 
         await axios.put(`https://youtube-1-i4hw.onrender.com/api/v1/users/unsave/${video._id}`) :
         await axios.put(`https://youtube-1-i4hw.onrender.com/api/v1/users/save/${video._id}`)
         
         dispatch(savedVideos(video._id))
    }
    return (
        <div className="flex gap-5">
            <div className="flex-5">
                {/* <iframe
                    src={video.videoFile}
                    allowFullScreen
                    width="100%"
                    height="525"
                /> */}
                <div className="text-white my-3">
                    <h1>{video.title}</h1>
                    <div className="flex">
                        <div className="flex-1">
                            <p>{video.views} views . {format(video.createdAt)}</p>
                        </div>
                        <div className="flex gap-3">
                            {
                                user.data.loggedInUser._id == video.userId ?
                                    <div>
                                        <button onClick={handleDelete}>
                                            <DeleteIcon />{loading ? "Deleting" : "Delete"}</button>
                                    </div> : null
                            }

                            <div className='flex gap-1' >
                                <div className='cursor-pointer' onClick={handleLibary}>
                                    {user.data.loggedInUser.savedVideos.includes(video._id) ?
                                        <BookmarkIcon /> :
                                        <BookmarkBorderIcon />
                                    }
                                </div>
                                <p>{user.data.loggedInUser.savedVideos.includes(video._id)?
                                    "Unsave" : "Save"
                                    }</p>
                            </div>

                            <div className='flex gap-1' >
                                <div className='cursor-pointer' onClick={handleLike}>
                                    {video.likes.includes(user.data.loggedInUser._id) ?
                                        <ThumbUpIcon /> :
                                        <ThumbUpOffAltIcon />
                                    }
                                </div>
                                <p>Like</p>
                            </div>
                            <div className='flex gap-1' >
                                <div className='cursor-pointer' onClick={handleDislike}>
                                    {video.dislikes.includes(user.data.loggedInUser._id) ?
                                        <ThumbDownIcon /> :
                                        <ThumbDownOffAltIcon />
                                    }
                                </div>
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
                                <p style={{ fontSize: 'small' }}>{channel.subscribers} subcribers</p>
                                <p>{video.desc}</p>
                            </div>
                        </div>
                        <div>
                            <Button
                                onClick={handleSubscribe}
                            >
                                {user.data.loggedInUser.subscribedUsers.includes(channel._id) ? "Subscribed" : "Subscribe"}
                            </Button>
                        </div>
                    </div>
                </div>

                <Comments />
            </div>

            <div className="flex-2">
                <Recommendation />
            </div>

        </div>
    )
}