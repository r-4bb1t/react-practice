import React, { Component } from 'react';
import './Page.css'

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
                <div>
                    <h1>샘플2</h1>
                    <h1>샘플2</h1>
                    <h1>샘플2</h1>
                    <h1>샘플2</h1>
                    <h1>샘플2</h1>
                    <h1>샘플2</h1>
                    <h1>샘플2</h1>
                    <h1>샘플2</h1>
                    <h1>샘플2</h1>
                    <h1>샘플2</h1>
                    <h1>샘플2</h1>
                    <h1>샘플2</h1>
                    <h1>샘플2</h1>
                    <h1>샘플2</h1>
                </div>
            </div>
        )
    }
}

export default Page2;