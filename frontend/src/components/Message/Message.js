import React from 'react'
import MessageMain from './MessageMain'
import MessageBottom from './MessageBottom'
import './Message.css';
function Message() {
  return (
    <div className='Message'> 
        <MessageMain/>
        <MessageBottom/>
    </div>
  )
}

export default Message