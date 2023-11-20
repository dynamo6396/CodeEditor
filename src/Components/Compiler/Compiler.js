import React,{useState,useEffect}from 'react'
import Editor from "@monaco-editor/react";
import Navbar from './Compiler-Navbar/Compnavbar';
import './Compiler.css';
import Axios from 'axios';
import Side_bar from '../sidebar/Side_bar';
import Showresult from '../Showresult/Showresult';
import loader from './loader.gif'
function Compiler(props) {
   // State variable to set users source code
   const userCode=props.usercode;
   const setUserCode=props.setUserCode;
//    const [userCode, setUserCode] = useState(``);
 
   // State variable to set editors default language
   const [userLang, setUserLang] = useState("cpp");

   // State variable to set editors default theme
   const [userTheme, setUserTheme] = useState("vs-dark");

   // State variable to set editors default font size
   const [fontSize, setFontSize] = useState(20);

   // State variable to set users input
   const [userInput, setUserInput] = useState("23");

   // State variable to set users output
   const [userOutput, setUserOutput] = useState("");
   
   const [loading, setLoading] = useState(false);
    const options = {
        fontSize: fontSize
    }
    // console.log(userCode)
    
    function compile() {
        // console.log("yes");
        setLoading(true);
        if (userCode === ``) {
            setLoading(false);
            alert("Enter the code")
            return
        }
 
        console.log(userLang);
        // Post request to compile endpoint
            Axios.post(`http://localhost:8000/compile`, {
            code: userCode,
            language: userLang,
            input: userInput
        }).then((res) => {
            setLoading(false);
            console.log(res)
            if(res.data.output!='')
            setUserOutput(res.data.output);
            else{
                setUserOutput(res.data.error);
            }
        })
    
    }
 
    // Function to clear the output screen
    function clearOutput() {
        // console.log(userOutput)
        const textarea=document.getElementById('clear');
          textarea.value = '';
        setUserOutput("");
        // textarea.value="";
    }   
    
  return (
    <>
    <div className="middle" >
      <div className="side-navigation scrollbar" >    
            {props.showmodal==1?<Side_bar setmodal={props.setmodal} loading={props.loading} setloading={props.setloading} /> :""}  
            {props.soulresult==1?<Showresult setsoulresult={props.setsoulresult} desiredoutput={props.desiredoutput}/>:""}
      </div>
      {/* <div className="mid-loading"> */}
      
    <div className="mid-section "  style={{width:props.zoom==true? "100%" : "50%", margin:props.zoom==true?"0px": "6px auto"}} >
                {props.loading==1?<div className="loading">
                    <img src={loader} alt=""  style={{height:50}} />
                </div>:""}
        {props.zoom==false?<div className="upper"/> :""}   
        <div className="mid"style={{width:props.zoom==true? "100%" : "80%"}}>
                <div className="app">
                <Navbar
                        userLang={userLang} setUserLang={setUserLang}
                        userTheme={userTheme} setUserTheme={setUserTheme}
                        fontSize={fontSize} setFontSize={setFontSize} zoom={props.zoom}
                        setzoom={props.setzoom} 
                        setsoulresult={props.setsoulresult}
                        setmodal={props.setmodal}
                    />
                    <div className="main">
                        <div className="left-container">
                            <Editor
                            className="editor"
                                options={options}
                                height="calc(100vh - 100px)"
                                width="100%"
                                theme={userTheme}
                                language={userLang}
                                defaultLanguage="cpp"
                                defaultValue= "// Enter the code here  "                               
                                
                                onChange={(value) => { setUserCode(value);}}
                            />
                        </div>
                        <div className='runbutton'>
                            <button className="run-btn" onClick={ ()=> compile() }>
                                Run
                            </button>
                        </div>
                        <div className="right-container">
                            <h4> Custom Input:</h4>
                            <div className="input-box">
                                <textarea class="code-inp"  onChange=
                                    {(e) => setUserInput(e.target.value)} rows="4">
                                </textarea>
                            </div>
                            {loading ? (
                                    <div className="spinner-box">
                                        <img src="a" alt="Loading..." />
                                    </div>
                                ) : (
                                    <div className="output-box">                                    
                                        <h4>Output:</h4>
                                        <textarea name="" className="code-inp " id ="clear"  rows="4" >
                                        {userOutput}
                                        </textarea>
                                        <button onClick={() => {  clearOutput() }}
                                            className="clear-btn">
                                            Clear
                                        </button>
                                    </div>)
                            }
                        </div>
                    </div>
                </div> 
            </div>
        <div className="bottom"/>
    </div>
    </div>
    {/* </div> */}
    </>
  )
}

export default Compiler
