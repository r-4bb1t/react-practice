import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

const Popup = (props) => {
    const cookies = new Cookies();
    const [state, setState] = useState({
        isOpened: cookies.get('checkPopup'),
        isChecked: false
    });
    const ButtonClick = () => {
        setState({
            isOpened: false,
        });
        cookies.set('checkPopup', !state.isChecked, { path: '/' });
    }
    const handleChange = () => {
        setState({
            isOpened : true,
            isChecked: !state.isChecked,
        });
    }
    console.log("cookie " + cookies.get('checkPopup'));
    console.log("state " + state.isOpened);
    if (state.isOpened) {
        return (
            <div style={PopupBackground}>
                <h1>공지사항</h1>
                <p>집에 가기 싫다!</p>
                <p>집에 가기 싫다!</p>
                <p>집에 가기 싫다!</p>
                <p>집에 가기 싫다!</p>
                <p>집에 가기 싫다!</p>
                <p>집에 가기 싫다!</p>
                <p>집에 가기 싫다!</p>
                <div style={{position: "absolute", bottom: "10%", textAlign: "center", width: "100%"}}>
                    <input type="checkbox" checked={state.isChecked} onChange={handleChange}/>
                    <span style={{fontSize:"0.5rem"}}>다시 보지 않기</span>
                </div>
                <div style={ButtonContainer}>
                    <button style={Button} onClick={ButtonClick}>닫기</button>
                </div>
            </div>
        )
    } else {
        return (
            <div/>
        )
    }
}

const PopupBackground = {
    position: "fixed",
    top: "20%",
    left: "10%",
    width: "250px",
    height: "400px",
    background: "gainsboro",
    fontFamily: "nanumsquare",
    boxShadow: "0 5px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    textAlign: "center",
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