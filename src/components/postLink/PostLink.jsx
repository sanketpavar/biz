import copy from 'copy-to-clipboard'
import React, { useState } from 'react'
import { BsClipboardCheck } from 'react-icons/bs';


function PostLink(props) {
    const {postId} = props


  return (
    <>
    <span className='cursor-pointer' onClick={()=>{copy(`${window.location.href}postDetails/${postId}`)}}><BsClipboardCheck size={25}/></span>
    </>
  )
}

export default PostLink