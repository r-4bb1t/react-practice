import React, { Component } from 'react';
import './Page.css';
import mainImg from '../assets/img/main.jpg';
import Img1 from '../assets/img/logo_instagram.png';
import BoxComponent from '../components/BoxComponent';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

class Home extends Component{
    componentDidMount(prevProps) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    render(){
        return (
            <div className="Page Home">
                <div>
                    <AwesomeSlider bullets={false}>
                        <div data-src={mainImg} />
                        <div data-src={mainImg} />
                        <div data-src={mainImg} />
                    </AwesomeSlider>
                </div>
                <div style={{height:"200px"}}></div>
                <div>
                    <br/>
                    <br/>
                    <h1 style={{fontWeight:"800", fontSize:"5.0rem", lineHeight:"0%"}}>Title</h1>
                    <h2 style={{fontWeight:"300", fontSize:"2.0rem"}}>subtitle</h2>
                    <h1>C</h1>
                    <h1>o</h1>
                    <h1>n</h1>
                    <h1>t</h1>
                    <h1>e</h1>
                    <h1>n</h1>
                    <h1>t</h1>
                    <br/>
                </div>
                <div style={{background:"linear-gradient(to bottom, palevioletred, mediumpurple)"}}>
                    <br/>
                    <br/>
                    <div style={{display:"flex", flexWrap : "wrap", flexDirection: "row", justifyContent: "center"}}>
                        <BoxComponent img = {Img1} title={"Title"} content={"content"}/>
                        <BoxComponent title={"asd"} content={"qwer"}/>
                        <BoxComponent title={"asd"} content={"qwer"}/>
                        <BoxComponent title={"asd"} content={"qwer"}/>
                        <BoxComponent title={"asd"} content={"qwer"}/>
                        <BoxComponent title={"asd"} content={"qwer"}/>
                    </div>
                    <br/>
                </div>
            </div>
        )
    }
}

export default Home;