import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    useScroll();
    return (
        <div style={{zIndex: "100", position: "fixed", left:"0px", background: "rgba(255, 255, 255, " + (window.scrollY - 100) / 100 + ")",
            top: Math.min(Math.max(-70, - window.scrollY / 3), 0) + "px",
            boxShadow: (window.scrollY > 100) ? "0 5px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)" : "none", width: "100%"}}>
            <div className="header">
                <span style={HeaderContentStyle}>
                    <div style={LogoStyle}>
                        <NavLink to="Home" style={{textDecoration: "none", color: "white"}}>SamplePage</NavLink>
                    </div>
                    <div style={{marginTop: "1.2rem", fontSize: "1.3rem", fontWeight:"300"}} >
                        <NavLink to="Home" className="aLink" activeClassName="activeLink" style={{color: (window.scrollY > 100) ? "black" : "white"}}>HOME</NavLink>
                        <NavLink to="Page1" className="aLink" activeClassName="activeLink" style={{color: (window.scrollY > 100) ? "black" : "white"}}>PAGE1</NavLink>
                        <NavLink to="Page2" className="aLink" activeClassName="activeLink" style={{color: (window.scrollY > 100) ? "black" : "white"}}>PAGE2</NavLink>
                    </div>
                </span>
            </div>
        </div>
    );
};

//<div style={{height: "2px", background: "linear-gradient(to right, palevioletred, mediumpurple)"}}/>
//opacity : (200 - window.scrollY) / 2 + "%"

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 100
    });
    const onScroll = () => {
        setState({ y: window.scrollY });
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
};

const HeaderContentStyle = {
    width: "100%",
    textAlign: "center",
    padding: "0.1rem 5rem"
}

const LogoStyle = {
    fontFamily: 'nanumsquare',
    fontSize: "2.0rem",
    fontWeight:"700",
}
export default Header;