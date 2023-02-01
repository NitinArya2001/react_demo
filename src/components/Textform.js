import React, {useState} from 'react'

export default function Textform(props) { 
    const handleOnChange = () =>{
        console.log("On Changed");
    }

    const handleupclick = ()=>{
        console.log("Uppercase button clicked");
    }

    const [text, setText] = useState("");
    setText("Enter");
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleupclick}>Convert to Uppercase</button>
        </div>
    )
}
