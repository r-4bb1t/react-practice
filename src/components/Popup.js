import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

const Popup = () => {
    const cookies = new Cookies();
    const [state, setState] = useState({
        isOpened: JSON.parse(cookies.get('checkPopup')),
        isChecked: false
    });
    const ButtonClick = () => {
        setState({
            isOpened: false,
            isChecked: state.isChecked,
        });
        cookies.set('checkPopup', !state.isChecked, { path: '/', maxAge: '86400'});
    }
    const handleChange = () => {
        setState({
            isOpened : true,
            isChecked: !state.isChecked,
        });
    }
    if (state.isOpened) {
        return (
            <div style={PopupBackground}>
                <div style={{margin : "20px"}}>
                    <h1>Title</h1>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                </div>
                <div style={{position: "absolute", bottom: "10%", textAlign: "center", width: "100%"}}>
                    <input type="checkbox" checked={state.isChecked} onChange={handleChange}/>
                    <span style={{fontSize:"0.5rem"}}>하루동안 보지 않기</span>
                </div>
                <div style={ButtonContainer}>
                    <button style={Button} onClick={ButtonClick}>닫기</button>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

const PopupBackground = {
    position: "absolute",
    top: "30%",
    left: "15%",
    width: "250px",
    height: "400px",
    background: "rgba(220, 220, 220)",
    fontFamily: "nanumsquare",
    boxShadow: "0 5px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    textAlign: "center",
    zIndex: "50"
}

const ButtonContainer = {
    position: "absolute",
    bottom: "0px",
    width: "100%",
    textAlign: "center",
    background: "white",
    padding: "3% 0%",
}

const Button = {
    padding: "0% 5%",
    textDecoration: "none",
    background: "white",
    border: "0",
    color:"Palevioletred",
}

export default Popup;