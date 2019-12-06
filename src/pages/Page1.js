import React, { Component } from 'react';

class Page1 extends Component{
    componentDidMount(prevProps) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    render(){
        return (
        <div style={{padding: "7rem 1rem", fontFamily: 'nanumsquare'}}>
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
        )
    }
}

export default Page1;