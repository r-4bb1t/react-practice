import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    useScroll();
    return (
        <div style={{position: "fixed", top: "0px", opacity : (200 - window.scrollY) / 2 + "%", width: "100%"}}>
            <div className="header">
                <span style={HeaderContentStyle}>
                    <div style={LogoStyle}>SamplePage</div>
                    <div style={LinkStyle}>
                        <NavLink to="Home" className="aLink" activeClassName="activeLink">HOME</NavLink>
                        <NavLink to="Page1" className="aLink" activeClassName="activeLink">PAGE1</NavLink>
                        <NavLink to="Page2" className="aLink" activeClassName="activeLink">PAGE2</NavLink>
                    </div>
                </span>
                <div style={{height: "2px", background: "linear-gradient(to right, palevioletred, mediumpurple)"}}/>
            </div>
        </div>
    );
};

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
    flexDirection: "row",
    textAlign: "center",
    padding: "0.3rem 5rem"
}

const LogoStyle = {
    fontFamily: 'nanumsquare',
    fontSize: "2.0rem",
    fontWeight:"700",
    color: "palevioletred"
}

const LinkStyle = {
    marginTop: "1.0rem",
    fontSize: "1.3rem",
    fontWeight:"400",
}

export default Header;