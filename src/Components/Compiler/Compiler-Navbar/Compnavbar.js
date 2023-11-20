import React,{useState} from 'react';
import Select from 'react-select';
import './Compnavbar.css';
import zoom_image from './zoom_image.png' ;
const Navbar = ({ userLang, setUserLang, userTheme,
    setUserTheme, fontSize, setFontSize,zoom ,setzoom ,setsoulresult,setmodal}) => {
    const languages = [
        { value: "c", label: "C" },
        { value: "cpp", label: "C++" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
    ];
    const themes = [
        { value: "vs-dark", label: "Dark" },
        { value: "light", label: "Light" },
    ]
    // const [font ,setfont]=useState(0);
    return (
        <div className="navbar">
            <div className="left">
                <div>
                    <Select class="select" options={languages} value={userLang}
                        onChange={(e) => setUserLang(e.value)}
                        placeholder={userLang} />
                </div>
                <div>
                    <Select  class="select" options={themes} value={userTheme}
                        onChange={(e) => setUserTheme(e.value)}
                        placeholder={userTheme} />
                </div>

            </div>
            <div className="right" style={{display:"flex",flexDirection:"row",alignItems:"center" ,gap:"30px",margin:"15px"}}>
                <div sytle={{margin:"8px"}}>
                    <label >Font Size</label>
                    < input type="number" min="18" max="30"
                        step="2" value={fontSize} 
                        onChange={(e) => { e.target.value>35?setFontSize(30):setFontSize(e.target.value) }} />
                </div>
                <div className="z-image">
                    <img src={zoom_image} alt="" onClick={()=>{setmodal(0);setsoulresult(0);zoom==false?setzoom(true):setzoom(false); console.log(zoom)}} />
                </div>

            </div>

        </div>
    )
}
 
export default Navbar