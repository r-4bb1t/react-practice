import React, { useState, useEffect } from 'react';

const BoxComponent = ({img, title, content}) => {
    return (
        <div style={Container}>
            <br/>
            <img src = {img} style={{width:"70px", marginBottom:"20px"}}></img>
            <h1 style={{margin:"-10px"}}>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

const Container = {
    width: "130px",
    height: "200px",
    borderRadius: "10px",
    background:"white",
    margin: "2% 2%",
    padding: "1% 1%",
    boxShadow: "0 5px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
}

export default BoxComponent;