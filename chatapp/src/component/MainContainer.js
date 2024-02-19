import React from 'react'
import '../style/maincontainer.css'
import Sidebar from './Sidebar'
import Chatarea from './chatarea'
export default function MainContainer() {
  return (
    <>
    <div className='maincointainer'>
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="chatarea">
        <Chatarea/>
      </div>
    </div>
    </>
  )
}
