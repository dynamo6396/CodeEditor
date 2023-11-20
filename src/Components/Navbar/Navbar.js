import React from 'react'
import  './Navbar.css'
import img from  './optionicon.png'
function Navbar(props) {
  const sett=()=>{
    if(props.soulresult==1) 
       props.setsoulresult(0)
    props.showmodal==0?props.setmodal(1):props.setmodal(1)
  }
   
  return (
       <div className="navigation" style={{display:props.zoom?"none":""}}>
            <div className="navigation-button">
               < button onClick={sett}> <img src={img} alt=""  style={{width:30}}/> </button>
            </div>
            <div className="mid-content">
                 ONLINE IDE
            </div>
            <div >
                <ul className='left'>
                    <li className='item'>Dynamo IDE</li>
                    <li className='item'>Add File</li>
                </ul>
            </div>
       </div>
  )
}
export default Navbar

// const [isvisible,setIsvisible]=useState(1);
//   const dynamicstyle=()=>{
//       useeffect(()=>{

//           isvisible==1?setIsvisible(0):setIsvisible(1);

//       },props.zoom)
//   }