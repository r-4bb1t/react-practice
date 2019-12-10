import React, { Component } from 'react';
import './Page.css'

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
                    <h1>이</h1>
                    <h1>제</h1>
                    <h1>여</h1>
                    <h1>기</h1>
                    <h1>다</h1>
                    <h1>가</h1>
                    <h1>뭘</h1>
                    <h1>해</h1>
                    <h1>야</h1>
                    <h1>좋</h1>
                    <h1>을</h1>
                    <h1>까</h1>
                    <h1>요</h1>
                </div>
            </div>
        )
    }
}

export default Home;