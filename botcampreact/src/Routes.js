import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import notfound from './pages/notfound/notfound'


export default class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>

                    <Route exact path="/" component={Home}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="*" component={notfound}/>

                </Switch>
            </BrowserRouter>
        );
    }
}