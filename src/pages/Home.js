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
        <div class="Page Home">
            <div>
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
        </div>
        )
    }
}

export default Home;