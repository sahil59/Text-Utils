// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from '../src/components/About';
import Navbar from '../src/components/Navbar';
import TextForm from '../src/components/TextForm';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

// let name = "Sahil"

function App() {

    const [state, setState] = useState({
        tog: false,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    }

    if (state.tog === false) {
        document.body.style.backgroundColor = "";
        document.body.style.transition = "0.5s";
    } else {
        document.body.style.backgroundColor = "#212529";
        document.body.style.transition = "0.5s";
    }
    // const [myStyle, setMyStyle] = useState({
    //   color: "",
    //   backgroundColor: "",
    //   border: "",
    //   transition: "1s"
    // })

    // const [buttonText, setButtonText] = useState("Enable Dark Mode");

    // const handleDark = () => {
    //   if (myStyle.color === '') {
    //     setMyStyle({
    //       color: "white",
    //       backgroundColor: "#212529",
    //       border: "1px solid white",
    //       transition: "1s"
    //     });
    //     setButtonText("Enable Light Mode");
    //   } else {
    //     setMyStyle({
    //       color: "",
    //       backgroundColor: "",
    //       border: "",
    //       transition: "1s"
    //     })
    //     setButtonText("Enable Dark Mode");
    //   }
    // }


    return (
        <>
            <Router>
                <Navbar title="TextUtils" handleChange={handleChange} state={state.tog} />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={<TextForm heading="Enter the text" state={state.tog} />}/>
                        <Route exact path='/about' element={<About state={state.tog}/>}/>
                    </Routes>
                    {/* <button className='btn btn-outline-dark my-2' onClick={handleDark}>{buttonText}</button> */}
                </div>
            </Router>
        </>
    );
}

export default App;
