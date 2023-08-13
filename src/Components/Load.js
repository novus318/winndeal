import React from 'react'
import load from '../Images/load.gif'
function Load() {
  return (
    <div style={{ background: '#333333', height:""}} className='d-flex align-items-center vh-100'>
    <div style={{ background: '#333333'}} className='d-flex align-items-center vh-100 m-auto'>
     <div className='m-auto'>
        <img style={{ height:"11em"}} src={load} alt='loading'/>
    </div> 
    </div>
    </div>
  )
}

export default Load
