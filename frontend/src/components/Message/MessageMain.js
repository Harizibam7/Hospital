import React from 'react';
import MessageMainBody from './MessageMainBody';
import MessageMainTop from './MessageMainTop';
import MessageMainBottom from './MessageMainBottom';

export default function MessageMain() {
  return (
    <div className='MessageMain'>
      <MessageMainTop/>
      <MessageMainBody/>
      <MessageMainBottom/>
    </div>
  )
}
