import React, { useState, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

//아직안만듦//

const Modal = ({ isOpened, close }) => {
    if (isOpened) {
        return (
            <div>
                <div style={ModalBackground}>
                    <div style={{background: "white"}}>
                        <button style={Button} onClick={close}>X</button>
                    </div>
                    <div style={{height:"95%", textAlign: "center"}}>
                        <PerfectScrollbar>
                            <div>
                                <h3>이용약관</h3>
                                <p>집에 가기 싫다!</p>
                                <p>집에 가기 싫다!</p>
                                <p>집에 가기 싫다!</p>
                                <p>집에 가기 싫다!</p>
                                <p>집에 가기 싫다!</p>
                                <p>집에 가기 싫다!</p>
                                <p>집에 가기 싫다!</p>
                                <p>집에 가기 싫다!</p>
                                <p>집에 가기 싫다!</p>
                                <p>집에 가기 싫다!</p>
                                <p>집에 가기 싫다!</p>
                                <p>집에 가기 싫다!</p>
                                <p>집에 가기 싫다!</p>
                                <p>집에 가기 싫다!</p>
                                <p>집에 가기 싫다!</p>
                                <p>집에 가기 싫다!</p>
                            </div>
                        </PerfectScrollbar>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

const ModalBackground = {
    position: "fixed",
    top: "20%",
    left: "30%",
    width: "40%",
    height: "400px",
    background: "white",
    fontFamily: "nanumsquare",
    boxShadow: "0 5px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    zIndex: "10"
}
const Button = {
    textDecoration: "none",
    border: "0",
    background: "white",
    color:"Palevioletred",
}

export default Modal;