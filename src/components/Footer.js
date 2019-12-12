import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
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
                <table style={{width:"60%", margin:"auto"}}>
                    <tr style={{textAlign:"center"}}>
                        <td colspan="3">
                            <Link to = "facebook.com">
                                <img src = {Logo1} style={{width: "30px", margin:"10px 10px"}}/>
                            </Link>
                            <Link to = "instagram.com">
                                <img src = {Logo2} style={{width: "30px", margin:"10px 10px"}}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            서울시 양천구 목동남로 n길 nnn, nnn-nnnn<br/>
                            nnn-nnnn, nnn, Mokdongnam-ro, Yangcheon-gu, Seoul, Republic of Korea<br/>
                            <br/>
                            Tel. 010-0000-0000<br/>
                            Fax. 02-0000-0000<br/>
                            Email. a@example.com<br/>
                        </td>
                        <td style={{color:"gray"}}>|</td>
                        <td>
                            <button style={Button} onClick={ButtonClick}>사이트 이용약관</button>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style={{color:"gray", textAlign:"center"}}>© Copyright 2019 d4n3tt. All Rights Reserved.</td>
                    </tr>
                </table>
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
    padding: "0% 5%",
    textDecoration: "none",
    background: "white",
    border: "0",
    color:"black",
}

export default Footer;