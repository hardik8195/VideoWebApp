import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../store/commentSlice';

const Comment = ({comment}) => {
  const [channel,setChannel] = useState({})
  const dispatch  = useDispatch()
  const {user} = useSelector((state)=>state.auth)
  useEffect(()=>{
    (async()=>{
      try {
        const res = await axios.get(`https://youtube-1-i4hw.onrender.com/api/v1/users/find/${comment.userId}`)
        setChannel(res.data)
      } catch (error) {
        console.log(error)
      }
    })()
  },[comment.userId])

  const handleDelete =async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`https://youtube-1-i4hw.onrender.com/api/v1/comments/${comment._id}`)
      dispatch(deleteComment(comment._id))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex justify-between my-3 text-white '>
      <div className='flex gap-2 '>
        <img src={channel.avatar} className="w-9 h-9 border rounded-full bg-black" />
        <div>
          <h1 style={{ fontSize: 'large' }}>{channel.username}</h1>
          <p style={{ fontSize: 'medium' }}>{comment.desc}</p>
        </div>
      </div>
      {user.data.loggedInUser._id===comment.userId?
      <Button onClick={handleDelete} className='cursor-pointer'>
        <DeleteIcon/>
      </Button>
      :null}

    </div>
  )
}

export default Comment
