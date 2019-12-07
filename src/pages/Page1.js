import React, { Component } from 'react';
import './Page.css';

class Page1 extends Component{
    componentDidMount(prevProps) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    render(){
        return (
            <div className="Page Page1">
                <div>
                    <h1>샘플</h1>
                    <h1>샘플</h1>
                    <h1>샘플</h1>
                    <h1>샘플</h1>
                    <h1>샘플</h1>
                    <h1>샘플</h1>
                    <h1>샘플</h1>
                    <h1>샘플</h1>
                    <h1>샘플</h1>
                    <h1>샘플</h1>
                    <h1>샘플</h1>
                    <h1>샘플</h1>
                    <h1>샘플</h1>
                    <h1>샘플</h1>
                </div>
            </div>
        )
    }
}

export default Page1;