import React from 'react'
import './Side_bar.css'
import backward from'./Moving Backward ICON.png'
import { Link}  from "react-router-dom"
export default function Side_bar(props) {
  return (
    <div className='container'>
      <div className="backward-icon">
        <img src={backward} onClick={()=>{props.setmodal(0)}} style={{width:30 }}alt="" />
      </div>
      <ul className='list-item'>
        <li className="item-s"  onClick={()=>{props.setmodal(0); props.setloading(1)} }  > <Link clssName="soul-values" to="/error" >Remove Compilation Errors</Link></li>
        <li className="item-s"  onClick={()=>{props.setmodal(0); props.setloading(1)} }  > <Link clssName="soul-values" to="/comment" >Make Comments</Link></li>
        <li className="item-s"  onClick={()=>{props.setmodal(0); props.setloading(1)} }  > <Link clssName="soul-values" to="/variablenaming" >Improve Variable Naming</Link></li>
        <li className="item-s"  onClick={()=>{props.setmodal(0); props.setloading(1)} }  > <Link clssName="soul-values" to="/Optimization" >Optimized Versioned Code</Link></li>
        <li className="item-s"  onClick={()=>{props.setmodal(0); props.setloading(1)} }  > <Link clssName="soul-values" to="/CConversion" >Convert into C</Link></li>
        <li className="item-s"  onClick={()=>{props.setmodal(0); props.setloading(1)} }  > <Link clssName="soul-values" to="/cppconversion" >Convert into C++</Link></li>
        <li className="item-s"  onClick={()=>{props.setmodal(0); props.setloading(1)} }  > <Link clssName="soul-values" to="/javaconversion" >Convert into Java</Link></li>
        <li className="item-s"  onClick={()=>{props.setmodal(0); props.setloading(1)} }  > <Link clssName="soul-values" to="/pythonconversion" >Convert into Python</Link></li>
        <li className="item-s"  onClick={()=>{props.setmodal(0); props.setloading(1)} }  > <Link clssName="soul-values" to="/solvingproblem" >Solve The Problem </Link></li>
        <li className="item-s"  onClick={()=>{props.setmodal(0); props.setloading(1)} }  > <Link clssName="soul-values" to="/englishconversion" >Convert in English </Link> </li>
      </ul>  
    </div>
  )
}
