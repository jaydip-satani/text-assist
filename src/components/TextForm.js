import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!", "success")
    }
    const handleLwClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase!", "success")
    }
    const handleClearClick = () => {
        setText('')
        props.showAlert("cleared text!", "success")
    }
    const handleSaveClick = () => {
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'textfile.txt';
        link.click();
        props.showAlert("saved filed", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'grey' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text}
                        style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'grey' }} onChange={handleOnChange} id="inputTextToSave" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 " onClick={handleUpClick}>Convert to Upper case</button>
                <button className="btn btn-primary mx-2" onClick={handleLwClick}>Convert to Lower case</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleSaveClick}>Save Text</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'grey' }}>
                <h1>Your text summary</h1>
                <p>
                    {text.length === 0 ? text.length : text.split(" ").length} words , {text.length} characters
                </p>
                <p>
                    {0.008 * text.split(" ").length} Minutes read
                </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter Your Text To Preview'}</p>
            </div>
        </>
    )
}
