import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, Page1 } from '../pages';


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <Route exact path="/Home" component={Home}/>
                    <Route exact path="/Page1" component={Page1}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;