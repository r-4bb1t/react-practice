import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header" style={HeaderStyle}>
            <span style={HeaderContentStyle}>
                <div style={LogoStyle}>LOGO</div>
                <div style={LinkStyle}>
                    <NavLink to="Home" className="aLink" activeClassName="activeLink">HOME</NavLink>
                    <NavLink to="Page1" className="aLink" activeClassName="activeLink">PAGE1</NavLink>
                    <NavLink to="Page2" className="aLink" activeClassName="activeLink">PAGE2</NavLink>
                </div>
            </span>
            <div style={{height: "2px", background: "linear-gradient(to right, palevioletred, mediumpurple)"}}/>
        </div>
    );
};

const HeaderStyle = {
    fontFamily: 'nanumsquare',
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "black",
    boxShadow: "0 5px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
}

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