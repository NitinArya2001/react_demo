import React, {useState} from 'react'

export default function Textform(props) { 

    const handleupclick = ()=>{
        // console.log("Uppercase button clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
        
    }
    const handledownclick = ()=>{
        // console.log("Uppercase button clicked "+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
        
    }
    
    const handleClearText = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text has been Cleared", "success");
        
    }
    
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space has been Removed", "success");
        
    }
    
    const handlecopyText = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("On Changed");
        setText(event.target.value);
    }


    const [text, setText] = useState("");
    // setText("Enter");
    return (
        <>
            <div className= "container" style = {{color: props.mode === 'dark'? 'white': 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control `} value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode === 'dark'?'grey':'#dbdadd', color: props.mode === 'dark'? 'white': 'black'}}id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handledownclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear text</button>
                <button className="btn btn-primary mx-1" onClick={handlecopyText}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra space</button>
            </div>
            <div className={`container my-3 text-${props.mode === 'light'? 'dark': 'light'}`} >
                <h1>Text Summary</h1>
                <p> words are {text.split(" ").filter(word => word !== "").length} and character are {text.length}</p>
                <p> No of minutes to read this text is {0.008*text.split(" ").length} </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something in the above textbox to preview here'}</p>
            </div>
        </>
    )
}
