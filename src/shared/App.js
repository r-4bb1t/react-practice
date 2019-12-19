import React, { Component, useState } from 'react';
import { Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import { Home, Page1, Page2 } from '../pages';
import './App.css';
import Cookies from 'universal-cookie';

class App extends Component {
    render() {
        const cookies = new Cookies();
        if (cookies.get('checkPopup') == null) cookies.set('checkPopup', true, { path: '/', maxAge: '86400'});
        return (
            <div className="App">
                <Header/>
                <Popup/>
                <div className="router">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Home" component={Home}/>
                    <Route exact path="/Page1" component={Page1}/>
                    <Route exact path="/Page2" component={Page2}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;