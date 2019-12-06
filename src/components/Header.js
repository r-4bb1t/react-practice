import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header" style={HeaderStyle}>
            <span style={HeaderContentStyle}>
                <span style={LogoStyle}>LOGO</span>
                <span style={LinkStyle}>
                    <NavLink to="Home" className="aLink" activeClassName="activeLink">HOME</NavLink>
                    <NavLink to="Page1" className="aLink" activeClassName="activeLink">PAGE1</NavLink>
                    <NavLink to="Page2" className="aLink" activeClassName="activeLink">PAGE2</NavLink>
                </span>
            </span>
            <div style={{height: "3px", background: "linear-gradient(to right, palevioletred, mediumpurple)"}}/>
        </div>
    );
};

const HeaderStyle = {
    position: "fixed",
    top: "0px",
    width: "100%",
    backgroundColor: "white",
    color: "black",
    boxShadow: "0 5px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
}

const HeaderContentStyle = {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: "0.1rem 5rem"
}

const LogoStyle = {
    fontSize: "2.0rem",
    fontWeight:"700",
    color: "palevioletred"
}

const LinkStyle = {
    fontSize: "1.3rem",
    fontWeight:"400",
    position: "fixed",
    right: "5rem",
}

export default Header;