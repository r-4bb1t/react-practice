import React, { Component } from 'react';

class Home extends Component{
    componentDidMount(prevProps) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    render(){
        return (
        <div style={{padding: "7rem 1rem", fontFamily: 'nanumsquare'}}>
            <h1>홈</h1>
            <h1>홈</h1>
            <h1>홈</h1>
            <h1>홈</h1>
            <h1>홈</h1>
            <h1>홈</h1>
            <h1>홈</h1>
            <h1>홈</h1>
            <h1>홈</h1>
            <h1>홈</h1>
            <h1>홈</h1>
            <h1>홈</h1>
            <h1>홈</h1>
        </div>
        )
    }
}

export default Home;