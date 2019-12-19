import React, { Component } from 'react';
import './Page.css'
import BoxComponent from '../components/BoxComponent';
import Img1 from '../assets/img/logo_instagram.png';

class Page2 extends Component {
    componentDidMount(prevProps) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    render() {
        return (
            <div className="Page Page2">
                <div style={{height:"400px",backgroundColor:"gray", textAlign:"center"}}>
                    <h1 style={{lineHeight:"400px"}}>PAGE2</h1>
                </div>
                <div style={{height:"200px"}}></div>
                <div>
                    <h1 style={{fontWeight:"800", fontSize:"5.0rem", lineHeight:"50%"}}>Title</h1>
                    <h2 style={{fontWeight:"300", fontSize:"2.0rem"}}>subtitle</h2>
                    <h1>C</h1>
                    <h1>o</h1>
                    <h1>n</h1>
                    <h1>t</h1>
                    <h1>e</h1>
                    <h1>n</h1>
                    <h1>t</h1>
                </div>
                <div style={{height:"200px"}}></div>
                <div style={{background:"rgba(220, 220, 220)"}}>
                    <div style={{height:"200px"}}></div>
                    <h1 style={{fontWeight:"800", fontSize:"5.0rem", lineHeight:"50%"}}>Title</h1>
                    <h2 style={{fontWeight:"300", fontSize:"2.0rem"}}>subtitle</h2>
                    <div style={{display:"flex", flexWrap : "wrap", flexDirection: "row", justifyContent: "center"}}>
                    <   BoxComponent img = {Img1} title={"Title"} content={"content"}/>
                        <BoxComponent img = {Img1} title={"Title"} content={"content"}/>
                        <BoxComponent img = {Img1} title={"Title"} content={"content"}/>
                        <BoxComponent img = {Img1} title={"Title"} content={"content"}/>
                        <BoxComponent img = {Img1} title={"Title"} content={"content"}/>
                        <BoxComponent img = {Img1} title={"Title"} content={"content"}/>
                    </div>
                    <div style={{height:"200px"}}></div>
                </div>
            </div>
        )
    }
}

export default Page2;