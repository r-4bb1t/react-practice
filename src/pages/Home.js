import React, { Component, useState, useEffect } from 'react';
import './Page.css';
import mainImg from '../assets/img/main.jpg';
import Img1 from '../assets/img/logo_instagram.png';
import BoxComponent from '../components/BoxComponent';
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

class Home extends Component{
    componentDidMount(prevProps) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    render(){
        return (
            <div className="Page Home" style={{padding: "0px"}}>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={mainImg}
                        alt="First slide"
                        style={{width:"100%"}}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={mainImg}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={mainImg}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
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

export default Home;