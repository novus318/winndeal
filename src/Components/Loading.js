import React from 'react'
import load from '../Images/load.gif'
function Loading() {
  return (
    <div style={{ background: '#313130'}} className='d-flex align-items-center vh-100'>
     <div className='m-auto'>
        <img style={{ height:"11em"}} src={load} alt='loading'/>
    </div> 
    </div>
  )
}

export default Loading
