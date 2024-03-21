import React from 'react'

const Comment = ({comment}) => {
  return (
    <div className='flex my-3 text-white'>
      <div className='flex gap-2 flex-1'>
        <img className="w-9 h-9 border rounded-full bg-black" />
        <div>
          <h1 style={{ fontSize: 'medium' }}>John Doe</h1>
          <p style={{ fontSize: 'small' }}>{comment.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Comment
