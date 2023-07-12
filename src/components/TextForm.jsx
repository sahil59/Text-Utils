import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handelUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handelDownClick = () => {
        let downText = text.toLowerCase();
        setText(downText);
    }

    const handelClearClick = () => {
        let clearText = " ";
        setText(clearText);
    }

    const handelOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        handleClick();
    }

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <div className={`text-${props.state===false? "dark":"light"}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handelOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handelUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handelDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handelClearClick}>Clear</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
            </div>
            <div className={`text-${props.state===false? "dark":"light"}`}>
                <h2>Your text summary</h2>
                <p>There are <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters.</p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
                <p> {text} </p>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Copied to clipboard!
                </Alert>
            </Snackbar>
        </>
    )
}
