import React,{ useState } from 'react';
import Compiler from './Components/Compiler/Compiler'; 
import Navbar from './Components/Navbar/Navbar';
import Soul from './Components/Soul'
import Side_bar from './Components/sidebar/Side_bar';
// import Side_bar from './Components/Side_bar';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom"; 

function App() { 
    const [showmodal,setShowmodal]=useState(0);
    const [userCode, setUserCode] = useState('');
    const [zoom ,setZoom]=useState(false);
    const [soulresult,setSoulresult]=useState(0);
    const [loading ,setLoading]=useState(0);
    const [desiredoutput,setDesiredoutput]=useState();
    const setmodal=(value)=> {setShowmodal(value);}   
    const setzoom=(value)=>{setZoom(value)};
    const setuserCode=(value)=>{setUserCode(value)}
    const setresult =(value)=>{setSoulresult(value)}
    const setloading=(value)=>{setLoading(value)}
    const setdesiredoutput=(value)=>{setDesiredoutput(value)};
    return (
        <div>
            <Router>
                <Navbar showmodal={showmodal}  setmodal={setmodal} setzoom ={setzoom}  zoom ={zoom} soulresult={soulresult} setsoulresult={setresult} loading={loading} setloading={setloading} />
                <Compiler showmodal={showmodal}  setmodal={setmodal} usercode={userCode} setUserCode={setUserCode} setzoom ={setzoom} zoom ={zoom} soulresult={soulresult} setsoulresult={setresult} loading={loading} setloading={setloading} desiredoutput={desiredoutput} /> 
                <Routes>
                <Route exact path="/" element={""}/> 
                <Route exact path="/error" element={<Soul  userCode={userCode} setuserCode={setuserCode}  soulresult={soulresult} setsoulresult={setresult} loading={loading} setloading={setloading} convertor ={"Remove error if exist"} setdesiredoutput={setdesiredoutput}/>}/> 
                <Route exact path="/comment" element={<Soul userCode={userCode} setuserCode={setuserCode} soulresult={soulresult} setsoulresult={setresult} loading={loading} setloading={setloading} convertor={"Make comments"} setdesiredoutput={setdesiredoutput} />}/>
                <Route exact path="/variablenaming" element={<Soul userCode={userCode} setuserCode={setuserCode} soulresult={soulresult} setsoulresult={setresult} loading={loading} setloading={setloading} convertor={"Improve Variable naming"} setdesiredoutput={setdesiredoutput} />}/>
                <Route exact path="/Optimization" element={<Soul userCode={userCode} setuserCode={setuserCode} soulresult={soulresult} setsoulresult={setresult} loading={loading} setloading={setloading} convertor={"Optimize if possible"} setdesiredoutput={setdesiredoutput} />}/>
                <Route exact path="/CConversion" element={<Soul userCode={userCode} setuserCode={setuserCode} soulresult={soulresult} setsoulresult={setresult} loading={loading} setloading={setloading} convertor={"Convert into C"} setdesiredoutput={setdesiredoutput} />}/>
                <Route exact path="/cppconversion" element={<Soul userCode={userCode} setuserCode={setuserCode} soulresult={soulresult} setsoulresult={setresult} loading={loading} setloading={setloading} convertor={"Convert into C++"} setdesiredoutput={setdesiredoutput} />}/>
                <Route exact path="/javaconversion" element={<Soul userCode={userCode} setuserCode={setuserCode} soulresult={soulresult} setsoulresult={setresult} loading={loading} setloading={setloading} convertor={"Convert into java"} setdesiredoutput={setdesiredoutput} />}/>
                <Route exact path="/pythonconversion" element={<Soul userCode={userCode} setuserCode={setuserCode} soulresult={soulresult} setsoulresult={setresult} loading={loading} setloading={setloading} convertor={"Convert into python"} setdesiredoutput={setdesiredoutput} />}/>
                <Route exact path="/solvingproblem" element={<Soul userCode={userCode} setuserCode={setuserCode} soulresult={soulresult} setsoulresult={setresult} loading={loading} setloading={setloading} convertor={"Convert into c++"} setdesiredoutput={setdesiredoutput} />}/>
                <Route exact path="/englishconversion" element={<Soul userCode={userCode} setuserCode={setuserCode} soulresult={soulresult} setsoulresult={setresult} loading={loading} setloading={setloading} convertor={"Convert into english"} setdesiredoutput={setdesiredoutput} />}/>
                </Routes>
          </Router>
        </div>
    );
}
 
export default App;
