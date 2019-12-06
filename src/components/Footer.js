import React from 'react';

const Footer = () => {
    return (
        <div className="footer" style={FooterStyle}>
            <span style={{}}> Copyirght ©d4n3tt all rights reserved. </span>
        </div>
    );
};

const FooterStyle = {
    position: "fixed",
    bottom: "0px",
    left: "0px",
    width: "100%",
    backgroundColor:"white",
    color:"black",
    textAlign:"center",
    fontSize:"0.8rem",
    padding: "0.2rem"
}

export default Footer;