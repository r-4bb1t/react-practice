import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../components/Header'
import { Main } from '../pages';


class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <Route exact path="/" component={Main}/>
                </div>
            </div>
        );
    }
}

export default App;