import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Logo1 from '../assets/img/logo_facebook.png'
import Logo2 from '../assets/img/logo_instagram.png'

const Footer = () => {
    const [state, setState] = useState({
        isModalOpened: false,
    });
    const ButtonClick = () => {
        setState({
            isModalOpened: true
        });
    }
    const closeModal = () => {
        setState({
            isModalOpened: false
        }); 
    }
    return (
        <div>
            <Modal isOpened={state.isModalOpened} close={closeModal}></Modal>
            <div className="footer" style={FooterStyle}>
                <table style={{width:"60%", margin:"auto"}}><tbody>
                    <tr style={{textAlign:"center"}}>
                        <td colSpan="3">
                            <a href={"http://www.facebook.com"}>
                                <img src = {Logo1} style={{width: "30px", margin:"10px 10px"}}/>
                            </a>
                            <a href = {"http://www.instagram.com"}>
                                <img src = {Logo2} style={{width: "30px", margin:"10px 10px"}}/>
                            </a>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td style={{fontSize:"0.7rem"}}>
                            서울시 양천구 목동남로 n길 nnn, nnn-nnnn<br/>
                            nnn-nnnn, nnn, Mokdongnam-ro, Yangcheon-gu, Seoul, Republic of Korea<br/>
                            <br/>
                            Tel. 010-0000-0000<br/>
                            Fax. 02-0000-0000<br/>
                            Email. a@example.com<br/>
                        </td>
                        <td style={{color:"gray", fontSize:"1.5rem"}}>|</td>
                        <td style={{textAlign:"right", fontSize:"0.7rem"}}>
                            대표자명 홍길동<br/>
                            사업자등록번호 000-00-00000<br/>
                            <br/>
                            <button style={Button} onClick={ButtonClick}>사이트 이용약관</button>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td colSpan="3" style={{color:"gray", textAlign:"center"}}>© Copyright 2019 d4n3tt. All Rights Reserved.</td>
                    </tr>
                </tbody></table>
            </div>
        </div>
    );
};

const FooterStyle = {
    bottom: "0px",
    left: "0px",
    width: "100%",
    display:"flex",
    alignItems:"center",
    backgroundColor:"white",
    color:"black",
    fontSize:"0.8rem",
    padding: "0.2rem",
    margin: "0.2rem",
}

const Button = {
    textDecoration: "none",
    background: "white",
    border: "0",
    color:"black",
    textAlign: "left"
}

export default Footer;