import React from 'react'
import './showresult.css'
function Showresult(props) {
  return (
    <div>
      <div className="resultcontainer">
       <div className="resultbot">
         <h2>Dynamo With You</h2>
        <p id="resultbox" className='content'>{props.desiredoutput}</p>
       </div>
      <div className="butt">
         <button className="clearbutt"onClick={()=>{props.setsoulresult(0)}}> Clear</button>
      </div>
      </div>
    </div>
  )
}

export default Showresult
