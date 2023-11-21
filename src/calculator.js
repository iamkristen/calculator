import App from "./App";
import './App.css'
import './calculator.css'
import React from "react";
import Button from "./button.js";
import {useState} from "react";
import test from './ravi.jpg';

function KeyPadComponent(props){
    const [text1, setText ] = useState("")
    const [img,setImg] = useState(false)
    const square = 'x²';

    const ClickHandle =(e) => {
    
        if (e.target.value=="C")
        {
            setText("")    
        }
        else if  (e.target.value=="=")
        {
        setText(eval(text1))
        alert(eval(text1))         
        }
        else if (e.target.value == "Show Me"){
            setText("");
            setImg(true);
        }
        else if (e.target.value == "X"){
            setText("");
            setImg(false);

        }
        else if (e.target.value == square){
            alert(eval(text1*text1));
            setText("")
            
        }
        else
        setText(text1+e.target.value)
      };

   
        return (
            <div className="Calculator">
                <div className="screen-row">
                <input type="text" readOnly value= {text1} />
                </div>
               <div >
                
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle}/>
                <Button label="C" ClickHandle={ClickHandle}/> 
                </div>

                <div >
                <Button label="1"  ClickHandle={ClickHandle}/>
                <Button label="2" ClickHandle={ClickHandle}/>
                <Button label="3" ClickHandle={ClickHandle}/>
                <Button label="+" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="4" ClickHandle={ClickHandle}/>
                <Button label="5" ClickHandle={ClickHandle}/>
                <Button label="6" ClickHandle={ClickHandle}/>
                <Button label="-" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="7" ClickHandle={ClickHandle}/>
                <Button label="8" ClickHandle={ClickHandle}/>
                <Button label="9" ClickHandle={ClickHandle}/>
                <Button label="*" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="." ClickHandle={ClickHandle}/>
                <Button label="0" ClickHandle={ClickHandle}/>
                <Button label="=" ClickHandle={ClickHandle}/>
                <Button label="/" ClickHandle={ClickHandle}/>
                </div>
                <Button label="x&#178;" ClickHandle={ClickHandle}/>
                <Button label="Show Me" ClickHandle={ClickHandle} isShowMe="true"/> 
                {img?<div class = "image-container"> 
                <Button label="X" ClickHandle={ClickHandle}></Button>
                <img src = {test} alt="something"></img>
                </div>:null}
                
            </div>
            
            
        );
    
}
export default KeyPadComponent;
