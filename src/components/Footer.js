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
    padding: "0.2rem",
    boxShadow: "0 -5px 5px rgba(0,0,0,0.12), 0 -1px 2px rgba(0,0,0,0.24)"
}

export default Footer;